import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentPoliciesQueryParams extends SpeakeasyBase {
    marketplaceId: string;
}
export declare class GetPaymentPoliciesSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetPaymentPoliciesRequest extends SpeakeasyBase {
    queryParams: GetPaymentPoliciesQueryParams;
    security: GetPaymentPoliciesSecurity;
}
export declare class GetPaymentPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    paymentPolicyResponse?: shared.PaymentPolicyResponse;
    statusCode: number;
}
