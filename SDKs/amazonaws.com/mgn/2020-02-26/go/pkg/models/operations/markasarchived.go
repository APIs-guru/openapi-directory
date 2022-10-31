package operations

import (
"openapi/pkg/models/shared")

type MarkAsArchivedHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type MarkAsArchivedRequestBody struct {
    SourceServerID string `json:"sourceServerID"`
    
}

type MarkAsArchivedRequest struct {
    Headers MarkAsArchivedHeaders 
    Request MarkAsArchivedRequestBody `request:"mediaType=application/json"`
    
}

type MarkAsArchivedResponse struct {
    ConflictException *interface{} 
    ContentType string 
    ResourceNotFoundException *interface{} 
    SourceServer *shared.SourceServer 
    StatusCode int64 
    UninitializedAccountException *interface{} 
    
}

