import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConfirmPurchaseStrongPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class ConfirmPurchaseStrongQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class ConfirmPurchaseStrongSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class ConfirmPurchaseStrongRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfirmPurchaseStrongPathParams;

  @SpeakeasyMetadata()
  queryParams: ConfirmPurchaseStrongQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ItvPurchaseStrongRequest;

  @SpeakeasyMetadata()
  security: ConfirmPurchaseStrongSecurity;
}


export class ConfirmPurchaseStrongResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itvPurchaseStrongResponse?: shared.ItvPurchaseStrongResponse;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
