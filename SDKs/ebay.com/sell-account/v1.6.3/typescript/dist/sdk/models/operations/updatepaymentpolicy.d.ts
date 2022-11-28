import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePaymentPolicyPathParams extends SpeakeasyBase {
    paymentPolicyId: string;
}
export declare class UpdatePaymentPolicySecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class UpdatePaymentPolicyRequest extends SpeakeasyBase {
    pathParams: UpdatePaymentPolicyPathParams;
    request: shared.PaymentPolicyRequest;
    security: UpdatePaymentPolicySecurity;
}
export declare class UpdatePaymentPolicyResponse extends SpeakeasyBase {
    contentType: string;
    setPaymentPolicyResponse?: shared.SetPaymentPolicyResponse;
    statusCode: number;
}
