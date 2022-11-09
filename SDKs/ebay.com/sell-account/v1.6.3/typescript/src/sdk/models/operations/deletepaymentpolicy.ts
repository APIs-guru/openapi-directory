import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeletePaymentPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment_policy_id" })
  paymentPolicyId: string;
}


export class DeletePaymentPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class DeletePaymentPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePaymentPolicyPathParams;

  @Metadata()
  security: DeletePaymentPolicySecurity;
}


export class DeletePaymentPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
