import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetPaymentDisputeSummariesServerList: readonly ["https://apiz.ebay.com{basePath}"];
export declare class GetPaymentDisputeSummariesQueryParams extends SpeakeasyBase {
    buyerUsername?: string;
    limit?: string;
    offset?: string;
    openDateFrom?: string;
    openDateTo?: string;
    orderId?: string;
    paymentDisputeStatus?: string;
}
export declare class GetPaymentDisputeSummariesSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetPaymentDisputeSummariesRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: GetPaymentDisputeSummariesQueryParams;
    security: GetPaymentDisputeSummariesSecurity;
}
export declare class GetPaymentDisputeSummariesResponse extends SpeakeasyBase {
    contentType: string;
    disputeSummaryResponse?: shared.DisputeSummaryResponse;
    statusCode: number;
}
