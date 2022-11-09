import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FindEligibleItemsQueryParams extends SpeakeasyBase {
    limit?: string;
    offset?: string;
}
export declare class FindEligibleItemsHeaders extends SpeakeasyBase {
    xEbayCMarketplaceId: string;
}
export declare class FindEligibleItemsSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class FindEligibleItemsRequest extends SpeakeasyBase {
    queryParams: FindEligibleItemsQueryParams;
    headers: FindEligibleItemsHeaders;
    security: FindEligibleItemsSecurity;
}
export declare class FindEligibleItemsResponse extends SpeakeasyBase {
    contentType: string;
    pagedEligibleItemCollection?: shared.PagedEligibleItemCollection;
    statusCode: number;
}
