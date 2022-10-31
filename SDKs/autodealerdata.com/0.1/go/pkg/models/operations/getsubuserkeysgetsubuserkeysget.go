package operations

import (
"openapi/pkg/models/shared")

type GetSubUserKeysGetSubUserKeysGetQueryParams struct {
    APIID string `queryParam:"style=form,explode=true,name=apiID"`
    APIKey string `queryParam:"style=form,explode=true,name=apiKey"`
    
}

type GetSubUserKeysGetSubUserKeysGetRequest struct {
    QueryParams GetSubUserKeysGetSubUserKeysGetQueryParams 
    
}

type GetSubUserKeysGetSubUserKeysGetResponse struct {
    ContentType string 
    GenericResponse *shared.GenericResponse 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    
}

