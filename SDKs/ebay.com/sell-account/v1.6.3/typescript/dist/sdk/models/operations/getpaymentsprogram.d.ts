import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentsProgramPathParams extends SpeakeasyBase {
    marketplaceId: string;
    paymentsProgramType: string;
}
export declare class GetPaymentsProgramSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetPaymentsProgramRequest extends SpeakeasyBase {
    pathParams: GetPaymentsProgramPathParams;
    security: GetPaymentsProgramSecurity;
}
export declare class GetPaymentsProgramResponse extends SpeakeasyBase {
    contentType: string;
    paymentsProgramResponse?: shared.PaymentsProgramResponse;
    statusCode: number;
}
