package operations

import (
"openapi/pkg/models/shared")


type DeleteStackXAmzTargetEnum string

const (
    DeleteStackXAmzTargetEnumOpsWorks20130218DeleteStack DeleteStackXAmzTargetEnum = "OpsWorks_20130218.DeleteStack"
)


type DeleteStackHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteStackXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteStackRequest struct {
    Headers DeleteStackHeaders 
    Request shared.DeleteStackRequest `request:"mediaType=application/json"`
    
}

type DeleteStackResponse struct {
    ContentType string 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

