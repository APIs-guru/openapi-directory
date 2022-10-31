package operations

import (
"openapi/pkg/models/shared")

type DeleteSectionPathParams struct {
    SectionGid string `pathParam:"style=simple,explode=false,name=section_gid"`
    
}

type DeleteSectionQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type DeleteSectionRequest struct {
    PathParams DeleteSectionPathParams 
    QueryParams DeleteSectionQueryParams 
    
}

type DeleteSection200ApplicationJSON struct {
    Data map[string]interface{} `json:"data,omitempty"`
    
}

type DeleteSectionResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    DeleteSection200ApplicationJSONObject *DeleteSection200ApplicationJSON 
    
}

