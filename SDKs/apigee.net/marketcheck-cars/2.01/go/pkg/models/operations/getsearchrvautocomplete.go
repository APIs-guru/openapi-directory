package operations

import (
"openapi/pkg/models/shared")


type GetSearchRvAutoCompleteFieldEnum string

const (
    GetSearchRvAutoCompleteFieldEnumMake GetSearchRvAutoCompleteFieldEnum = "make"
GetSearchRvAutoCompleteFieldEnumModel GetSearchRvAutoCompleteFieldEnum = "model"
GetSearchRvAutoCompleteFieldEnumTrim GetSearchRvAutoCompleteFieldEnum = "trim"
GetSearchRvAutoCompleteFieldEnumClass GetSearchRvAutoCompleteFieldEnum = "class"
GetSearchRvAutoCompleteFieldEnumTransmission GetSearchRvAutoCompleteFieldEnum = "transmission"
GetSearchRvAutoCompleteFieldEnumFuelType GetSearchRvAutoCompleteFieldEnum = "fuel_type"
GetSearchRvAutoCompleteFieldEnumExteriorColor GetSearchRvAutoCompleteFieldEnum = "exterior_color"
GetSearchRvAutoCompleteFieldEnumInteriorColor GetSearchRvAutoCompleteFieldEnum = "interior_color"
GetSearchRvAutoCompleteFieldEnumEngine GetSearchRvAutoCompleteFieldEnum = "engine"
GetSearchRvAutoCompleteFieldEnumState GetSearchRvAutoCompleteFieldEnum = "state"
GetSearchRvAutoCompleteFieldEnumCity GetSearchRvAutoCompleteFieldEnum = "city"
)



type GetSearchRvAutoCompleteSortByEnum string

const (
    GetSearchRvAutoCompleteSortByEnumIndex GetSearchRvAutoCompleteSortByEnum = "index"
GetSearchRvAutoCompleteSortByEnumCount GetSearchRvAutoCompleteSortByEnum = "count"
)


type GetSearchRvAutoCompleteQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    BodyType *string `queryParam:"style=form,explode=true,name=body_type"`
    City *string `queryParam:"style=form,explode=true,name=city"`
    Color *string `queryParam:"style=form,explode=true,name=color"`
    Drivetrain *string `queryParam:"style=form,explode=true,name=drivetrain"`
    Engine *string `queryParam:"style=form,explode=true,name=engine"`
    Field GetSearchRvAutoCompleteFieldEnum `queryParam:"style=form,explode=true,name=field"`
    FuelType *string `queryParam:"style=form,explode=true,name=fuel_type"`
    IgnoreCase *bool `queryParam:"style=form,explode=true,name=ignore_case"`
    Input string `queryParam:"style=form,explode=true,name=input"`
    InventoryType *shared.InventoryTypeEnum `queryParam:"style=form,explode=true,name=inventory_type"`
    Make *string `queryParam:"style=form,explode=true,name=make"`
    Model *string `queryParam:"style=form,explode=true,name=model"`
    SortBy *GetSearchRvAutoCompleteSortByEnum `queryParam:"style=form,explode=true,name=sort_by"`
    State *string `queryParam:"style=form,explode=true,name=state"`
    TermCounts *bool `queryParam:"style=form,explode=true,name=term_counts"`
    Transmission *string `queryParam:"style=form,explode=true,name=transmission"`
    Trim *string `queryParam:"style=form,explode=true,name=trim"`
    VehicleType *string `queryParam:"style=form,explode=true,name=vehicle_type"`
    Year *string `queryParam:"style=form,explode=true,name=year"`
    
}

type GetSearchRvAutoCompleteRequest struct {
    QueryParams GetSearchRvAutoCompleteQueryParams 
    
}

type GetSearchRvAutoCompleteResponse struct {
    ContentType string 
    Error *shared.Error 
    SearchAutoCompleteResponse *shared.SearchAutoCompleteResponse 
    StatusCode int64 
    
}

