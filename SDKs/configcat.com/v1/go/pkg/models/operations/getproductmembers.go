package operations

import (
"openapi/pkg/models/shared")

type GetProductMembersPathParams struct {
    ProductID string `pathParam:"style=simple,explode=false,name=productId"`
    
}

type GetProductMembersRequest struct {
    PathParams GetProductMembersPathParams 
    
}

type GetProductMembersResponse struct {
    ContentType string 
    MemberModels []shared.MemberModel 
    StatusCode int64 
    
}

