package operations

import (
"openapi/pkg/models/shared")

type MakeTokenGetTokenGetQueryParams struct {
    APIID string `queryParam:"style=form,explode=true,name=apiID"`
    APIKey string `queryParam:"style=form,explode=true,name=apiKey"`
    
}

type MakeTokenGetTokenGetRequest struct {
    QueryParams MakeTokenGetTokenGetQueryParams 
    
}

type MakeTokenGetTokenGetResponse struct {
    ContentType string 
    HTTPValidationError *shared.HTTPValidationError 
    JSONWebToken *shared.JSONWebToken 
    StatusCode int64 
    
}

