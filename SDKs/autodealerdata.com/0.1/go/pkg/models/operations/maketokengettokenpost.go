package operations

import (
"openapi/pkg/models/shared")

type MakeTokenGetTokenPostQueryParams struct {
    APIID string `queryParam:"style=form,explode=true,name=apiID"`
    APIKey string `queryParam:"style=form,explode=true,name=apiKey"`
    
}

type MakeTokenGetTokenPostRequest struct {
    QueryParams MakeTokenGetTokenPostQueryParams 
    
}

type MakeTokenGetTokenPostResponse struct {
    ContentType string 
    HTTPValidationError *shared.HTTPValidationError 
    JSONWebToken *shared.JSONWebToken 
    StatusCode int64 
    
}

