import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePaymentPolicyPathParams extends SpeakeasyBase {
    paymentPolicyId: string;
}
export declare class DeletePaymentPolicySecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class DeletePaymentPolicyRequest extends SpeakeasyBase {
    pathParams: DeletePaymentPolicyPathParams;
    security: DeletePaymentPolicySecurity;
}
export declare class DeletePaymentPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
