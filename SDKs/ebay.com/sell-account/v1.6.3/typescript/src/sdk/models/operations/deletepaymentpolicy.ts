import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeletePaymentPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_policy_id" })
  paymentPolicyId: string;
}


export class DeletePaymentPolicySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class DeletePaymentPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePaymentPolicyPathParams;

  @SpeakeasyMetadata()
  security: DeletePaymentPolicySecurity;
}


export class DeletePaymentPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
