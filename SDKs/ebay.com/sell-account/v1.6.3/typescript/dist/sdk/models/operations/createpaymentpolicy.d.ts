import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePaymentPolicySecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CreatePaymentPolicyRequest extends SpeakeasyBase {
    request: shared.PaymentPolicyRequest;
    security: CreatePaymentPolicySecurity;
}
export declare class CreatePaymentPolicyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    setPaymentPolicyResponse?: shared.SetPaymentPolicyResponse;
    statusCode: number;
}
