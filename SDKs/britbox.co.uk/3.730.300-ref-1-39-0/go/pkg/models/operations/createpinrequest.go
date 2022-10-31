package operations

import (
"openapi/pkg/models/shared")

type CreatePinRequestQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type CreatePinRequestRequest struct {
    QueryParams CreatePinRequestQueryParams 
    Request shared.EeCreatePinRequest `request:"mediaType=application/json"`
    
}

type CreatePinRequestResponse struct {
    ContentType string 
    EeCreatePinResponse *shared.EeCreatePinResponse 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

