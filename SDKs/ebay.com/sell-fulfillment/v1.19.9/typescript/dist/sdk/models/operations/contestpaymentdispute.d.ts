import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ContestPaymentDisputeServerList: readonly ["https://apiz.ebay.com{basePath}"];
export declare class ContestPaymentDisputePathParams extends SpeakeasyBase {
    paymentDisputeId: string;
}
export declare class ContestPaymentDisputeSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class ContestPaymentDisputeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ContestPaymentDisputePathParams;
    request?: shared.ContestPaymentDisputeRequest;
    security: ContestPaymentDisputeSecurity;
}
export declare class ContestPaymentDisputeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
