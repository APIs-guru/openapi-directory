import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPromotionReportsQueryParams extends SpeakeasyBase {
    limit?: string;
    marketplaceId: string;
    offset?: string;
    promotionStatus?: string;
    promotionType?: string;
    q?: string;
}
export declare class GetPromotionReportsSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetPromotionReportsRequest extends SpeakeasyBase {
    queryParams: GetPromotionReportsQueryParams;
    security: GetPromotionReportsSecurity;
}
export declare class GetPromotionReportsResponse extends SpeakeasyBase {
    contentType: string;
    promotionsReportPagedCollection?: shared.PromotionsReportPagedCollection;
    statusCode: number;
}
