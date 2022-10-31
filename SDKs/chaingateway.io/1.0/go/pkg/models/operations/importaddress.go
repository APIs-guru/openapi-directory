package operations

import (
"openapi/pkg/models/shared")

type ImportAddressHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type ImportAddressRequest struct {
    Headers ImportAddressHeaders 
    Request shared.ImportAddressRequest `request:"mediaType=application/json"`
    
}

type ImportAddressResponse struct {
    ContentType string 
    StatusCode int64 
    ImportAddress *shared.ImportAddress 
    
}

