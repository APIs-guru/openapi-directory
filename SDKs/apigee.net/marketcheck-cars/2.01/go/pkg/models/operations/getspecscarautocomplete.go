package operations

import (
"openapi/pkg/models/shared")


type GetSpecsCarAutoCompleteFieldEnum string

const (
    GetSpecsCarAutoCompleteFieldEnumMake GetSpecsCarAutoCompleteFieldEnum = "make"
GetSpecsCarAutoCompleteFieldEnumModel GetSpecsCarAutoCompleteFieldEnum = "model"
GetSpecsCarAutoCompleteFieldEnumTrim GetSpecsCarAutoCompleteFieldEnum = "trim"
GetSpecsCarAutoCompleteFieldEnumBodyType GetSpecsCarAutoCompleteFieldEnum = "body_type"
GetSpecsCarAutoCompleteFieldEnumBodySubtype GetSpecsCarAutoCompleteFieldEnum = "body_subtype"
GetSpecsCarAutoCompleteFieldEnumVehicleType GetSpecsCarAutoCompleteFieldEnum = "vehicle_type"
GetSpecsCarAutoCompleteFieldEnumTransmission GetSpecsCarAutoCompleteFieldEnum = "transmission"
GetSpecsCarAutoCompleteFieldEnumDrivetrain GetSpecsCarAutoCompleteFieldEnum = "drivetrain"
GetSpecsCarAutoCompleteFieldEnumFuelType GetSpecsCarAutoCompleteFieldEnum = "fuel_type"
GetSpecsCarAutoCompleteFieldEnumEngine GetSpecsCarAutoCompleteFieldEnum = "engine"
GetSpecsCarAutoCompleteFieldEnumEngineSize GetSpecsCarAutoCompleteFieldEnum = "engine_size"
GetSpecsCarAutoCompleteFieldEnumEngineBlock GetSpecsCarAutoCompleteFieldEnum = "engine_block"
)


type GetSpecsCarAutoCompleteQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    BodySubtype *string `queryParam:"style=form,explode=true,name=body_subtype"`
    BodyType *string `queryParam:"style=form,explode=true,name=body_type"`
    Drivetrain *string `queryParam:"style=form,explode=true,name=drivetrain"`
    Engine *string `queryParam:"style=form,explode=true,name=engine"`
    EngineBlock *string `queryParam:"style=form,explode=true,name=engine_block"`
    EngineSize *string `queryParam:"style=form,explode=true,name=engine_size"`
    Field GetSpecsCarAutoCompleteFieldEnum `queryParam:"style=form,explode=true,name=field"`
    FuelType *string `queryParam:"style=form,explode=true,name=fuel_type"`
    IgnoreCase *bool `queryParam:"style=form,explode=true,name=ignore_case"`
    Input string `queryParam:"style=form,explode=true,name=input"`
    Make *string `queryParam:"style=form,explode=true,name=make"`
    Model *string `queryParam:"style=form,explode=true,name=model"`
    Transmission *string `queryParam:"style=form,explode=true,name=transmission"`
    Trim *string `queryParam:"style=form,explode=true,name=trim"`
    VehicleType *string `queryParam:"style=form,explode=true,name=vehicle_type"`
    Year *string `queryParam:"style=form,explode=true,name=year"`
    
}

type GetSpecsCarAutoCompleteRequest struct {
    QueryParams GetSpecsCarAutoCompleteQueryParams 
    
}

type GetSpecsCarAutoCompleteResponse struct {
    ContentType string 
    Error *shared.Error 
    SpecsAutoCompleteResponse *shared.SpecsAutoCompleteResponse 
    StatusCode int64 
    
}

