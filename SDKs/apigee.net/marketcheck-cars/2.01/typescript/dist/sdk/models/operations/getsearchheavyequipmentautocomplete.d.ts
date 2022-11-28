import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSearchHeavyEquipmentAutoCompleteFieldEnum {
    Make = "make",
    Model = "model",
    Trim = "trim",
    BodyType = "body_type",
    Transmission = "transmission",
    Drivetrain = "drivetrain",
    FuelType = "fuel_type",
    ExteriorColor = "exterior_color",
    InteriorColor = "interior_color",
    Engine = "engine",
    Category = "category",
    SubCategory = "sub_category",
    State = "state",
    City = "city"
}
export declare enum GetSearchHeavyEquipmentAutoCompleteSortByEnum {
    Index = "index",
    Count = "count"
}
export declare class GetSearchHeavyEquipmentAutoCompleteQueryParams extends SpeakeasyBase {
    apiKey?: string;
    bodyType?: string;
    city?: string;
    color?: string;
    drivetrain?: string;
    engine?: string;
    field: GetSearchHeavyEquipmentAutoCompleteFieldEnum;
    fuelType?: string;
    ignoreCase?: boolean;
    input: string;
    inventoryType?: shared.InventoryTypeEnum;
    make?: string;
    model?: string;
    sortBy?: GetSearchHeavyEquipmentAutoCompleteSortByEnum;
    state?: string;
    termCounts?: boolean;
    transmission?: string;
    trim?: string;
    vehicleType?: string;
    year?: string;
}
export declare class GetSearchHeavyEquipmentAutoCompleteRequest extends SpeakeasyBase {
    queryParams: GetSearchHeavyEquipmentAutoCompleteQueryParams;
}
export declare class GetSearchHeavyEquipmentAutoCompleteResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    searchAutoCompleteResponse?: shared.SearchAutoCompleteResponse;
    statusCode: number;
}
