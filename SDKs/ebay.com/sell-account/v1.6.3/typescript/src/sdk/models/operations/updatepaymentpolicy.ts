import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePaymentPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment_policy_id" })
  paymentPolicyId: string;
}


export class UpdatePaymentPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UpdatePaymentPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePaymentPolicyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PaymentPolicyRequest;

  @Metadata()
  security: UpdatePaymentPolicySecurity;
}


export class UpdatePaymentPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  setPaymentPolicyResponse?: shared.SetPaymentPolicyResponse;

  @Metadata()
  statusCode: number;
}
