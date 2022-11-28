import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchHeavyEquipmentActiveQueryParams extends SpeakeasyBase {
    apiKey?: string;
    bodyType?: string;
    category?: string;
    city?: string;
    dealerId?: string;
    dealerName?: string;
    drivetrain?: string;
    engine?: string;
    exteriorColor?: string;
    facetSort?: shared.FacetSortEnum;
    facets?: string;
    firstSeenDays?: string;
    firstSeenRange?: string;
    fuelType?: string;
    hoursUsedRange?: string;
    interiorColor?: string;
    inventoryType?: shared.InventoryTypeEnum;
    lastSeenDays?: string;
    lastSeenRange?: string;
    latitude?: number;
    longitude?: number;
    make?: string;
    milesRange?: string;
    model?: string;
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
    subCategory?: string;
    transmission?: string;
    trim?: string;
    vin?: string;
    year?: string;
    zip?: string;
}
export declare class GetSearchHeavyEquipmentActiveRequest extends SpeakeasyBase {
    queryParams: GetSearchHeavyEquipmentActiveQueryParams;
}
export declare class GetSearchHeavyEquipmentActiveResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    heavyEquipmentsSearchResponse?: shared.HeavyEquipmentsSearchResponse;
    statusCode: number;
}
