package operations

import (
"openapi/pkg/models/shared")


type DeleteAppXAmzTargetEnum string

const (
    DeleteAppXAmzTargetEnumOpsWorks20130218DeleteApp DeleteAppXAmzTargetEnum = "OpsWorks_20130218.DeleteApp"
)


type DeleteAppHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteAppXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteAppRequest struct {
    Headers DeleteAppHeaders 
    Request shared.DeleteAppRequest `request:"mediaType=application/json"`
    
}

type DeleteAppResponse struct {
    ContentType string 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

