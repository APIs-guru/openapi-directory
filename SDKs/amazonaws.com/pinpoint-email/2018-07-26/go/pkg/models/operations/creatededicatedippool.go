package operations

import (
"openapi/pkg/models/shared")

type CreateDedicatedIPPoolHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateDedicatedIPPoolRequestBody struct {
    PoolName string `json:"PoolName"`
    Tags []shared.Tag `json:"Tags,omitempty"`
    
}

type CreateDedicatedIPPoolRequest struct {
    Headers CreateDedicatedIPPoolHeaders 
    Request CreateDedicatedIPPoolRequestBody `request:"mediaType=application/json"`
    
}

type CreateDedicatedIPPoolResponse struct {
    AlreadyExistsException *interface{} 
    BadRequestException *interface{} 
    ConcurrentModificationException *interface{} 
    ContentType string 
    CreateDedicatedIPPoolResponse map[string]interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

