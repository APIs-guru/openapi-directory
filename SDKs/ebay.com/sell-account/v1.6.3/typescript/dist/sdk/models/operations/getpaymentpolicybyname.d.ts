import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentPolicyByNameQueryParams extends SpeakeasyBase {
    marketplaceId: string;
    name: string;
}
export declare class GetPaymentPolicyByNameSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetPaymentPolicyByNameRequest extends SpeakeasyBase {
    queryParams: GetPaymentPolicyByNameQueryParams;
    security: GetPaymentPolicyByNameSecurity;
}
export declare class GetPaymentPolicyByNameResponse extends SpeakeasyBase {
    contentType: string;
    paymentPolicy?: shared.PaymentPolicy;
    statusCode: number;
}
