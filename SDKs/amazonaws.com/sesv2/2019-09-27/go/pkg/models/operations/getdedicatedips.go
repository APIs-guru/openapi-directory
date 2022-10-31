package operations

import (
"openapi/pkg/models/shared")

type GetDedicatedIpsQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    PoolName *string `queryParam:"style=form,explode=true,name=PoolName"`
    
}

type GetDedicatedIpsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDedicatedIpsRequest struct {
    QueryParams GetDedicatedIpsQueryParams 
    Headers GetDedicatedIpsHeaders 
    
}

type GetDedicatedIpsResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetDedicatedIpsResponse *shared.GetDedicatedIpsResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

