import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment_policy_id" })
  paymentPolicyId: string;
}


export class GetPaymentPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetPaymentPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPaymentPolicyPathParams;

  @Metadata()
  security: GetPaymentPolicySecurity;
}


export class GetPaymentPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentPolicy?: shared.PaymentPolicy;

  @Metadata()
  statusCode: number;
}
