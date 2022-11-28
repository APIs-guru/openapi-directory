import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDealersRvQueryParams extends SpeakeasyBase {
    apiKey?: string;
    city?: string;
    country?: shared.NonDefaultCountryEnum;
    dealerType?: shared.DealerTypeEnum;
    facets?: string;
    inventoryUrl?: string;
    latitude?: number;
    listingCountRange?: string;
    longitude?: number;
    provider?: boolean;
    radius?: number;
    rangeFacets?: string;
    rows?: number;
    sortBy?: string;
    sortOrder?: shared.SortOrderEnum;
    start?: number;
    state?: string;
    zip?: string;
}
export declare class GetDealersRvRequest extends SpeakeasyBase {
    queryParams: GetDealersRvQueryParams;
}
export declare class GetDealersRvResponse extends SpeakeasyBase {
    contentType: string;
    dealersResponse?: shared.DealersResponse;
    error?: shared.Error;
    statusCode: number;
}
