package operations

import (
"openapi/pkg/models/shared")

type VinDecodeVinDecodeGetQueryParams struct {
    IncludeRecall *bool `queryParam:"style=form,explode=true,name=includeRecall"`
    Jwt string `queryParam:"style=form,explode=true,name=jwt"`
    PassEmpty *bool `queryParam:"style=form,explode=true,name=passEmpty"`
    Vin string `queryParam:"style=form,explode=true,name=vin"`
    
}

type VinDecodeVinDecodeGetRequest struct {
    QueryParams VinDecodeVinDecodeGetQueryParams 
    
}

type VinDecodeVinDecodeGetResponse struct {
    ContentType string 
    GenericResponse *shared.GenericResponse 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    
}

