import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePaymentPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_policy_id" })
  paymentPolicyId: string;
}


export class UpdatePaymentPolicySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UpdatePaymentPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePaymentPolicyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PaymentPolicyRequest;

  @SpeakeasyMetadata()
  security: UpdatePaymentPolicySecurity;
}


export class UpdatePaymentPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  setPaymentPolicyResponse?: shared.SetPaymentPolicyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
