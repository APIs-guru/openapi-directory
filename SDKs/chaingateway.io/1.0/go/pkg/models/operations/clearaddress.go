package operations

import (
"openapi/pkg/models/shared")

type ClearAddressHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type ClearAddressRequest struct {
    Headers ClearAddressHeaders 
    Request shared.ClearAddressRequest `request:"mediaType=application/json"`
    
}

type ClearAddressResponse struct {
    ContentType string 
    StatusCode int64 
    ClearAddress *shared.ClearAddress 
    
}

