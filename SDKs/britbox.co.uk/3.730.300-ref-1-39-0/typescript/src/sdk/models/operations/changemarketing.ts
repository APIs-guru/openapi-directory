import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChangeMarketingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class ChangeMarketingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class ChangeMarketingRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ChangeMarketingQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvChangeMarketingRequest;

  @Metadata()
  security: ChangeMarketingSecurity;
}


export class ChangeMarketingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
