import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCurrentEntitlementQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetCurrentEntitlementSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetCurrentEntitlementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCurrentEntitlementQueryParams;

  @SpeakeasyMetadata()
  security: GetCurrentEntitlementSecurity;
}


export class GetCurrentEntitlementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itvEntitlementCurrent?: shared.ItvEntitlementCurrent;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
