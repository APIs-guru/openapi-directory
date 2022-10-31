package operations

import (
"openapi/pkg/models/shared")

type GetBlockHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetBlockRequest struct {
    Headers GetBlockHeaders 
    Request shared.GetBlockRequest `request:"mediaType=application/json"`
    
}

type GetBlockResponse struct {
    ContentType string 
    StatusCode int64 
    GetBlock *shared.GetBlock 
    
}

