package operations

import (
"openapi/pkg/models/shared")

type ExportAddressHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type ExportAddressRequest struct {
    Headers ExportAddressHeaders 
    Request shared.ExportAddressRequest `request:"mediaType=application/json"`
    
}

type ExportAddressResponse struct {
    ContentType string 
    StatusCode int64 
    ExportAddress *shared.ExportAddress 
    
}

