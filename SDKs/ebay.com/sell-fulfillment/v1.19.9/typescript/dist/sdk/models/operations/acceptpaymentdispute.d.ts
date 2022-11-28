import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const AcceptPaymentDisputeServerList: readonly ["https://apiz.ebay.com{basePath}"];
export declare class AcceptPaymentDisputePathParams extends SpeakeasyBase {
    paymentDisputeId: string;
}
export declare class AcceptPaymentDisputeSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class AcceptPaymentDisputeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: AcceptPaymentDisputePathParams;
    request?: shared.AcceptPaymentDisputeRequest;
    security: AcceptPaymentDisputeSecurity;
}
export declare class AcceptPaymentDisputeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
