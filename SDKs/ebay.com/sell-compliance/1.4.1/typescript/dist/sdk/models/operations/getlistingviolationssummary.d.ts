import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetListingViolationsSummaryQueryParams extends SpeakeasyBase {
    complianceType?: string;
}
export declare class GetListingViolationsSummaryHeaders extends SpeakeasyBase {
    xEbayCMarketplaceId?: string;
}
export declare class GetListingViolationsSummarySecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetListingViolationsSummaryRequest extends SpeakeasyBase {
    queryParams: GetListingViolationsSummaryQueryParams;
    headers: GetListingViolationsSummaryHeaders;
    security: GetListingViolationsSummarySecurity;
}
export declare class GetListingViolationsSummaryResponse extends SpeakeasyBase {
    complianceSummary?: shared.ComplianceSummary;
    contentType: string;
    statusCode: number;
}
