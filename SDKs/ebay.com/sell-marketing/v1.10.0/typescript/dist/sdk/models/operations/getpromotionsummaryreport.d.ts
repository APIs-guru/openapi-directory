import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPromotionSummaryReportQueryParams extends SpeakeasyBase {
    marketplaceId: string;
}
export declare class GetPromotionSummaryReportSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetPromotionSummaryReportRequest extends SpeakeasyBase {
    queryParams: GetPromotionSummaryReportQueryParams;
    security: GetPromotionSummaryReportSecurity;
}
export declare class GetPromotionSummaryReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    summaryReportResponse?: shared.SummaryReportResponse;
}
