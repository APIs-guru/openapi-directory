import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetPaymentDisputeServerList: readonly ["https://apiz.ebay.com{basePath}"];
export declare class GetPaymentDisputePathParams extends SpeakeasyBase {
    paymentDisputeId: string;
}
export declare class GetPaymentDisputeSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetPaymentDisputeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: GetPaymentDisputePathParams;
    security: GetPaymentDisputeSecurity;
}
export declare class GetPaymentDisputeResponse extends SpeakeasyBase {
    contentType: string;
    paymentDispute?: shared.PaymentDispute;
    statusCode: number;
}
