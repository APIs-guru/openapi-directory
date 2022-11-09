import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetListingViolationsQueryParams extends SpeakeasyBase {
    complianceType?: string;
    filter?: string;
    limit?: string;
    listingId?: string;
    offset?: string;
}
export declare class GetListingViolationsHeaders extends SpeakeasyBase {
    xEbayCMarketplaceId: string;
}
export declare class GetListingViolationsSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetListingViolationsRequest extends SpeakeasyBase {
    queryParams: GetListingViolationsQueryParams;
    headers: GetListingViolationsHeaders;
    security: GetListingViolationsSecurity;
}
export declare class GetListingViolationsResponse extends SpeakeasyBase {
    contentType: string;
    pagedComplianceViolationCollection?: shared.PagedComplianceViolationCollection;
    statusCode: number;
}
