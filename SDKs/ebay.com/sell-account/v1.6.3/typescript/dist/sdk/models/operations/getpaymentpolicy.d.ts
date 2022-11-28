import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentPolicyPathParams extends SpeakeasyBase {
    paymentPolicyId: string;
}
export declare class GetPaymentPolicySecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetPaymentPolicyRequest extends SpeakeasyBase {
    pathParams: GetPaymentPolicyPathParams;
    security: GetPaymentPolicySecurity;
}
export declare class GetPaymentPolicyResponse extends SpeakeasyBase {
    contentType: string;
    paymentPolicy?: shared.PaymentPolicy;
    statusCode: number;
}
