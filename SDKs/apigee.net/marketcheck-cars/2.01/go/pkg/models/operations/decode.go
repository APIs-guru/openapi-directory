package operations

import (
"openapi/pkg/models/shared")

type DecodePathParams struct {
    Vin string `pathParam:"style=simple,explode=false,name=vin"`
    
}

type DecodeQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    
}

type DecodeRequest struct {
    PathParams DecodePathParams 
    QueryParams DecodeQueryParams 
    
}

type DecodeResponse struct {
    Build *shared.Build 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

