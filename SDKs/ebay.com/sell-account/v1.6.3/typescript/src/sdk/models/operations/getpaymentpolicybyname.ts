import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentPolicyByNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=marketplace_id" })
  marketplaceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class GetPaymentPolicyByNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPaymentPolicyByNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPaymentPolicyByNameQueryParams;

  @SpeakeasyMetadata()
  security: GetPaymentPolicyByNameSecurity;
}


export class GetPaymentPolicyByNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentPolicy?: shared.PaymentPolicy;

  @SpeakeasyMetadata()
  statusCode: number;
}
