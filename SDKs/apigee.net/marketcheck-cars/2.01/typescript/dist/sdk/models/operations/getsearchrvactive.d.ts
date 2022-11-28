import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchRvActiveQueryParams extends SpeakeasyBase {
    apiKey?: string;
    city?: string;
    class?: string;
    dealerId?: string;
    dealerName?: string;
    engine?: string;
    exteriorColor?: string;
    facetSort?: shared.FacetSortEnum;
    facets?: string;
    firstSeenDays?: string;
    firstSeenRange?: string;
    fuelType?: string;
    interiorColor?: string;
    inventoryType?: shared.InventoryTypeEnum;
    lastSeenDays?: string;
    lastSeenRange?: string;
    latitude?: number;
    longitude?: number;
    make?: string;
    milesRange?: string;
    model?: string;
    modelO?: string;
    msaCode?: string;
    msrpRange?: string;
    priceRange?: string;
    radius?: number;
    rangeFacets?: string;
    rows?: number;
    searchText?: string;
    sortBy?: string;
    sortOrder?: shared.SortOrderEnum;
    source?: string;
    start?: number;
    state?: string;
    stats?: string;
    stockNo?: string;
    transmission?: string;
    vin?: string;
    year?: string;
    zip?: string;
}
export declare class GetSearchRvActiveRequest extends SpeakeasyBase {
    queryParams: GetSearchRvActiveQueryParams;
}
export declare class GetSearchRvActiveResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    rvSearchResponse?: shared.RvSearchResponse;
    statusCode: number;
}
