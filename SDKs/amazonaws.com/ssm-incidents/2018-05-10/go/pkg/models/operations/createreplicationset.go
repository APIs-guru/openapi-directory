package operations

import (
"openapi/pkg/models/shared")

type CreateReplicationSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateReplicationSetRequestBody struct {
    ClientToken *string `json:"clientToken,omitempty"`
    Regions map[string]shared.RegionMapInputValue `json:"regions"`
    
}

type CreateReplicationSetRequest struct {
    Headers CreateReplicationSetHeaders 
    Request CreateReplicationSetRequestBody `request:"mediaType=application/json"`
    
}

type CreateReplicationSetResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateReplicationSetOutput *shared.CreateReplicationSetOutput 
    InternalServerException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

