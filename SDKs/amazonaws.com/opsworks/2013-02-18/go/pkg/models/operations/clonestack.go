package operations

import (
"openapi/pkg/models/shared")


type CloneStackXAmzTargetEnum string

const (
    CloneStackXAmzTargetEnumOpsWorks20130218CloneStack CloneStackXAmzTargetEnum = "OpsWorks_20130218.CloneStack"
)


type CloneStackHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CloneStackXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CloneStackRequest struct {
    Headers CloneStackHeaders 
    Request shared.CloneStackRequest `request:"mediaType=application/json"`
    
}

type CloneStackResponse struct {
    CloneStackResult *shared.CloneStackResult 
    ContentType string 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

