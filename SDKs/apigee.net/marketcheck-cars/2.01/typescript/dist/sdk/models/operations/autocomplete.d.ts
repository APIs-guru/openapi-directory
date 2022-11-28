import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AutoCompleteFieldEnum {
    Ymm = "ymm",
    Mm = "mm",
    Make = "make",
    Model = "model",
    Trim = "trim",
    BodyType = "body_type",
    BodySubtype = "body_subtype",
    VehicleType = "vehicle_type",
    Transmission = "transmission",
    Drivetrain = "drivetrain",
    FuelType = "fuel_type",
    ExteriorColor = "exterior_color",
    InteriorColor = "interior_color",
    Engine = "engine",
    EngineSize = "engine_size",
    EngineBlock = "engine_block",
    State = "state",
    City = "city"
}
export declare enum AutoCompleteIncludeNonVinListingsEnum {
    True = "true",
    False = "false"
}
export declare enum AutoCompleteSortByEnum {
    Index = "index",
    Count = "count"
}
export declare class AutoCompleteQueryParams extends SpeakeasyBase {
    apiKey?: string;
    bodySubtype?: string;
    bodyType?: string;
    carType?: shared.CarTypeEnum;
    city?: string;
    country?: shared.CountryEnum;
    drivetrain?: string;
    engine?: string;
    engineBlock?: string;
    engineSize?: string;
    exteriorColor?: string;
    field: AutoCompleteFieldEnum;
    fuelType?: string;
    ignoreCase?: boolean;
    includeNonVinListings?: AutoCompleteIncludeNonVinListingsEnum;
    input: string;
    interiorColor?: string;
    make?: string;
    model?: string;
    sortBy?: AutoCompleteSortByEnum;
    state?: string;
    termCounts?: boolean;
    transmission?: string;
    trim?: string;
    vehicleType?: string;
    year?: string;
}
export declare class AutoCompleteRequest extends SpeakeasyBase {
    queryParams: AutoCompleteQueryParams;
}
export declare class AutoCompleteResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    searchAutoCompleteResponse?: shared.SearchAutoCompleteResponse;
    statusCode: number;
}
