package operations

import (
"openapi/pkg/models/shared")

type RequestUserKeyPairQueryParams struct {
    Version *string `queryParam:"style=form,explode=true,name=version"`
    
}

type RequestUserKeyPairHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    
}

type RequestUserKeyPairRequest struct {
    QueryParams RequestUserKeyPairQueryParams 
    Headers RequestUserKeyPairHeaders 
    
}

type RequestUserKeyPairResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    UserKeyPairContainer *shared.UserKeyPairContainer 
    
}

