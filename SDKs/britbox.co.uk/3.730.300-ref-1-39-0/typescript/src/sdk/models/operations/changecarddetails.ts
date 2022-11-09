import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChangeCardDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class ChangeCardDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class ChangeCardDetailsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class ChangeCardDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChangeCardDetailsPathParams;

  @Metadata()
  queryParams: ChangeCardDetailsQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvChangeCardDetailsRequest;

  @Metadata()
  security: ChangeCardDetailsSecurity;
}


export class ChangeCardDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
