import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchMotorcycleActiveQueryParams extends SpeakeasyBase {
    apiKey?: string;
    bodyType?: string;
    city?: string;
    color?: string;
    cylinders?: string;
    dealerId?: string;
    drivetrain?: string;
    engine?: string;
    facetSort?: shared.FacetSortEnum;
    facets?: string;
    firstSeenDays?: string;
    firstSeenRange?: string;
    fuelType?: string;
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
    taxonomyVin?: string;
    transmission?: string;
    trim?: string;
    vehicleType?: string;
    vin?: string;
    year?: string;
    zip?: string;
}
export declare class GetSearchMotorcycleActiveRequest extends SpeakeasyBase {
    queryParams: GetSearchMotorcycleActiveQueryParams;
}
export declare class GetSearchMotorcycleActiveResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    motorcycleSearchResponse?: shared.MotorcycleSearchResponse;
    statusCode: number;
}
