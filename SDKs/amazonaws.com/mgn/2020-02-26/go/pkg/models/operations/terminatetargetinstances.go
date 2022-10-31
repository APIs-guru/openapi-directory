package operations

import (
"openapi/pkg/models/shared")

type TerminateTargetInstancesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type TerminateTargetInstancesRequestBody struct {
    SourceServerIDs []string `json:"sourceServerIDs"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type TerminateTargetInstancesRequest struct {
    Headers TerminateTargetInstancesHeaders 
    Request TerminateTargetInstancesRequestBody `request:"mediaType=application/json"`
    
}

type TerminateTargetInstancesResponse struct {
    ConflictException *interface{} 
    ContentType string 
    StatusCode int64 
    TerminateTargetInstancesResponse *shared.TerminateTargetInstancesResponse 
    UninitializedAccountException *interface{} 
    ValidationException *interface{} 
    
}

