import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpgradePlanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class UpgradePlanQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class UpgradePlanSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class UpgradePlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpgradePlanPathParams;

  @SpeakeasyMetadata()
  queryParams: UpgradePlanQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ItvUpgradePlanRequest;

  @SpeakeasyMetadata()
  security: UpgradePlanSecurity;
}


export class UpgradePlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
