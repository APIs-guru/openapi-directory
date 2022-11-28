import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_policy_id" })
  paymentPolicyId: string;
}


export class GetPaymentPolicySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPaymentPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentPolicyPathParams;

  @SpeakeasyMetadata()
  security: GetPaymentPolicySecurity;
}


export class GetPaymentPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentPolicy?: shared.PaymentPolicy;

  @SpeakeasyMetadata()
  statusCode: number;
}
