package operations

import (
"openapi/pkg/models/shared")

type ListingsOnePathParams struct {
    EcosystemID string `pathParam:"style=simple,explode=false,name=ecosystem_id"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ListingsOneRequest struct {
    PathParams ListingsOnePathParams 
    
}

type ListingsOneResponse struct {
    ContentType string 
    GetListingResponse *shared.GetListingResponse 
    StatusCode int64 
    
}

