import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSpecsCarAutoCompleteFieldEnum {
    Make = "make",
    Model = "model",
    Trim = "trim",
    BodyType = "body_type",
    BodySubtype = "body_subtype",
    VehicleType = "vehicle_type",
    Transmission = "transmission",
    Drivetrain = "drivetrain",
    FuelType = "fuel_type",
    Engine = "engine",
    EngineSize = "engine_size",
    EngineBlock = "engine_block"
}
export declare class GetSpecsCarAutoCompleteQueryParams extends SpeakeasyBase {
    apiKey?: string;
    bodySubtype?: string;
    bodyType?: string;
    drivetrain?: string;
    engine?: string;
    engineBlock?: string;
    engineSize?: string;
    field: GetSpecsCarAutoCompleteFieldEnum;
    fuelType?: string;
    ignoreCase?: boolean;
    input: string;
    make?: string;
    model?: string;
    transmission?: string;
    trim?: string;
    vehicleType?: string;
    year?: string;
}
export declare class GetSpecsCarAutoCompleteRequest extends SpeakeasyBase {
    queryParams: GetSpecsCarAutoCompleteQueryParams;
}
export declare class GetSpecsCarAutoCompleteResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    specsAutoCompleteResponse?: shared.SpecsAutoCompleteResponse;
    statusCode: number;
}
