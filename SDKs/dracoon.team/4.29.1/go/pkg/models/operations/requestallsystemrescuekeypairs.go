package operations

import (
"openapi/pkg/models/shared")

type RequestAllSystemRescueKeyPairsHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    
}

type RequestAllSystemRescueKeyPairsRequest struct {
    Headers RequestAllSystemRescueKeyPairsHeaders 
    
}

type RequestAllSystemRescueKeyPairsResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    UserKeyPairContainers []shared.UserKeyPairContainer 
    
}

