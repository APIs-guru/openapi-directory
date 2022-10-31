package operations

import (
"openapi/pkg/models/shared")


type DeleteUserProfileXAmzTargetEnum string

const (
    DeleteUserProfileXAmzTargetEnumOpsWorks20130218DeleteUserProfile DeleteUserProfileXAmzTargetEnum = "OpsWorks_20130218.DeleteUserProfile"
)


type DeleteUserProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteUserProfileXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteUserProfileRequest struct {
    Headers DeleteUserProfileHeaders 
    Request shared.DeleteUserProfileRequest `request:"mediaType=application/json"`
    
}

type DeleteUserProfileResponse struct {
    ContentType string 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

