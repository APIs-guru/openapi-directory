import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentsProgramOnboardingPathParams extends SpeakeasyBase {
    marketplaceId: string;
    paymentsProgramType: string;
}
export declare class GetPaymentsProgramOnboardingSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetPaymentsProgramOnboardingRequest extends SpeakeasyBase {
    pathParams: GetPaymentsProgramOnboardingPathParams;
    security: GetPaymentsProgramOnboardingSecurity;
}
export declare class GetPaymentsProgramOnboardingResponse extends SpeakeasyBase {
    contentType: string;
    paymentsProgramOnboardingResponse?: shared.PaymentsProgramOnboardingResponse;
    statusCode: number;
}
