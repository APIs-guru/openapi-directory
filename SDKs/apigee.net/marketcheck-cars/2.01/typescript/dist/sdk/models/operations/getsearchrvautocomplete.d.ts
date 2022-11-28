import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSearchRvAutoCompleteFieldEnum {
    Make = "make",
    Model = "model",
    Trim = "trim",
    Class = "class",
    Transmission = "transmission",
    FuelType = "fuel_type",
    ExteriorColor = "exterior_color",
    InteriorColor = "interior_color",
    Engine = "engine",
    State = "state",
    City = "city"
}
export declare enum GetSearchRvAutoCompleteSortByEnum {
    Index = "index",
    Count = "count"
}
export declare class GetSearchRvAutoCompleteQueryParams extends SpeakeasyBase {
    apiKey?: string;
    bodyType?: string;
    city?: string;
    color?: string;
    drivetrain?: string;
    engine?: string;
    field: GetSearchRvAutoCompleteFieldEnum;
    fuelType?: string;
    ignoreCase?: boolean;
    input: string;
    inventoryType?: shared.InventoryTypeEnum;
    make?: string;
    model?: string;
    sortBy?: GetSearchRvAutoCompleteSortByEnum;
    state?: string;
    termCounts?: boolean;
    transmission?: string;
    trim?: string;
    vehicleType?: string;
    year?: string;
}
export declare class GetSearchRvAutoCompleteRequest extends SpeakeasyBase {
    queryParams: GetSearchRvAutoCompleteQueryParams;
}
export declare class GetSearchRvAutoCompleteResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    searchAutoCompleteResponse?: shared.SearchAutoCompleteResponse;
    statusCode: number;
}
