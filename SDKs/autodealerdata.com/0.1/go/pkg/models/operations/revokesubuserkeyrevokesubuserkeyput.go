package operations

import (
"openapi/pkg/models/shared")

type RevokeSubUserKeyRevokeSubUserKeyPutQueryParams struct {
    APIID string `queryParam:"style=form,explode=true,name=apiID"`
    APIKey string `queryParam:"style=form,explode=true,name=apiKey"`
    SubUserKeyUUID string `queryParam:"style=form,explode=true,name=subUserKeyUUID"`
    
}

type RevokeSubUserKeyRevokeSubUserKeyPutRequest struct {
    QueryParams RevokeSubUserKeyRevokeSubUserKeyPutQueryParams 
    
}

type RevokeSubUserKeyRevokeSubUserKeyPutResponse struct {
    ContentType string 
    GenericResponse *shared.GenericResponse 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    
}

