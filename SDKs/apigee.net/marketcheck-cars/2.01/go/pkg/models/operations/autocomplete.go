package operations

import (
"openapi/pkg/models/shared")


type AutoCompleteFieldEnum string

const (
    AutoCompleteFieldEnumYmm AutoCompleteFieldEnum = "ymm"
AutoCompleteFieldEnumMm AutoCompleteFieldEnum = "mm"
AutoCompleteFieldEnumMake AutoCompleteFieldEnum = "make"
AutoCompleteFieldEnumModel AutoCompleteFieldEnum = "model"
AutoCompleteFieldEnumTrim AutoCompleteFieldEnum = "trim"
AutoCompleteFieldEnumBodyType AutoCompleteFieldEnum = "body_type"
AutoCompleteFieldEnumBodySubtype AutoCompleteFieldEnum = "body_subtype"
AutoCompleteFieldEnumVehicleType AutoCompleteFieldEnum = "vehicle_type"
AutoCompleteFieldEnumTransmission AutoCompleteFieldEnum = "transmission"
AutoCompleteFieldEnumDrivetrain AutoCompleteFieldEnum = "drivetrain"
AutoCompleteFieldEnumFuelType AutoCompleteFieldEnum = "fuel_type"
AutoCompleteFieldEnumExteriorColor AutoCompleteFieldEnum = "exterior_color"
AutoCompleteFieldEnumInteriorColor AutoCompleteFieldEnum = "interior_color"
AutoCompleteFieldEnumEngine AutoCompleteFieldEnum = "engine"
AutoCompleteFieldEnumEngineSize AutoCompleteFieldEnum = "engine_size"
AutoCompleteFieldEnumEngineBlock AutoCompleteFieldEnum = "engine_block"
AutoCompleteFieldEnumState AutoCompleteFieldEnum = "state"
AutoCompleteFieldEnumCity AutoCompleteFieldEnum = "city"
)



type AutoCompleteIncludeNonVinListingsEnum string

const (
    AutoCompleteIncludeNonVinListingsEnumTrue AutoCompleteIncludeNonVinListingsEnum = "true"
AutoCompleteIncludeNonVinListingsEnumFalse AutoCompleteIncludeNonVinListingsEnum = "false"
)



type AutoCompleteSortByEnum string

const (
    AutoCompleteSortByEnumIndex AutoCompleteSortByEnum = "index"
AutoCompleteSortByEnumCount AutoCompleteSortByEnum = "count"
)


type AutoCompleteQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    BodySubtype *string `queryParam:"style=form,explode=true,name=body_subtype"`
    BodyType *string `queryParam:"style=form,explode=true,name=body_type"`
    CarType *shared.CarTypeEnum `queryParam:"style=form,explode=true,name=car_type"`
    City *string `queryParam:"style=form,explode=true,name=city"`
    Country *shared.CountryEnum `queryParam:"style=form,explode=true,name=country"`
    Drivetrain *string `queryParam:"style=form,explode=true,name=drivetrain"`
    Engine *string `queryParam:"style=form,explode=true,name=engine"`
    EngineBlock *string `queryParam:"style=form,explode=true,name=engine_block"`
    EngineSize *string `queryParam:"style=form,explode=true,name=engine_size"`
    ExteriorColor *string `queryParam:"style=form,explode=true,name=exterior_color"`
    Field AutoCompleteFieldEnum `queryParam:"style=form,explode=true,name=field"`
    FuelType *string `queryParam:"style=form,explode=true,name=fuel_type"`
    IgnoreCase *bool `queryParam:"style=form,explode=true,name=ignore_case"`
    IncludeNonVinListings *AutoCompleteIncludeNonVinListingsEnum `queryParam:"style=form,explode=true,name=include_non_vin_listings"`
    Input string `queryParam:"style=form,explode=true,name=input"`
    InteriorColor *string `queryParam:"style=form,explode=true,name=interior_color"`
    Make *string `queryParam:"style=form,explode=true,name=make"`
    Model *string `queryParam:"style=form,explode=true,name=model"`
    SortBy *AutoCompleteSortByEnum `queryParam:"style=form,explode=true,name=sort_by"`
    State *string `queryParam:"style=form,explode=true,name=state"`
    TermCounts *bool `queryParam:"style=form,explode=true,name=term_counts"`
    Transmission *string `queryParam:"style=form,explode=true,name=transmission"`
    Trim *string `queryParam:"style=form,explode=true,name=trim"`
    VehicleType *string `queryParam:"style=form,explode=true,name=vehicle_type"`
    Year *string `queryParam:"style=form,explode=true,name=year"`
    
}

type AutoCompleteRequest struct {
    QueryParams AutoCompleteQueryParams 
    
}

type AutoCompleteResponse struct {
    ContentType string 
    Error *shared.Error 
    SearchAutoCompleteResponse *shared.SearchAutoCompleteResponse 
    StatusCode int64 
    
}

