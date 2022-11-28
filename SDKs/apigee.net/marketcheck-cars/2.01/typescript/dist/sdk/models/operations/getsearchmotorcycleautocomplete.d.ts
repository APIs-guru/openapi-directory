import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSearchMotorcycleAutoCompleteFieldEnum {
    Make = "make",
    Model = "model",
    Trim = "trim",
    BodyType = "body_type",
    VehicleType = "vehicle_type",
    Transmission = "transmission",
    Drivetrain = "drivetrain",
    FuelType = "fuel_type",
    Color = "color",
    Engine = "engine",
    State = "state",
    City = "city"
}
export declare enum GetSearchMotorcycleAutoCompleteSortByEnum {
    Index = "index",
    Count = "count"
}
export declare class GetSearchMotorcycleAutoCompleteQueryParams extends SpeakeasyBase {
    apiKey?: string;
    bodyType?: string;
    city?: string;
    color?: string;
    drivetrain?: string;
    engine?: string;
    field: GetSearchMotorcycleAutoCompleteFieldEnum;
    fuelType?: string;
    ignoreCase?: boolean;
    input: string;
    inventoryType?: shared.InventoryTypeEnum;
    make?: string;
    model?: string;
    sortBy?: GetSearchMotorcycleAutoCompleteSortByEnum;
    state?: string;
    termCounts?: boolean;
    transmission?: string;
    trim?: string;
    vehicleType?: string;
    year?: string;
}
export declare class GetSearchMotorcycleAutoCompleteRequest extends SpeakeasyBase {
    queryParams: GetSearchMotorcycleAutoCompleteQueryParams;
}
export declare class GetSearchMotorcycleAutoCompleteResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    searchAutoCompleteResponse?: shared.SearchAutoCompleteResponse;
    statusCode: number;
}
