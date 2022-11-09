import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpgradePlanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class UpgradePlanQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class UpgradePlanSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class UpgradePlanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpgradePlanPathParams;

  @Metadata()
  queryParams: UpgradePlanQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvUpgradePlanRequest;

  @Metadata()
  security: UpgradePlanSecurity;
}


export class UpgradePlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
