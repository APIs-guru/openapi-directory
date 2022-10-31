package operations

import (
"openapi/pkg/models/shared")


type DeleteEnvironmentAccountConnectionXAmzTargetEnum string

const (
    DeleteEnvironmentAccountConnectionXAmzTargetEnumAwsProton20200720DeleteEnvironmentAccountConnection DeleteEnvironmentAccountConnectionXAmzTargetEnum = "AwsProton20200720.DeleteEnvironmentAccountConnection"
)


type DeleteEnvironmentAccountConnectionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteEnvironmentAccountConnectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteEnvironmentAccountConnectionRequest struct {
    Headers DeleteEnvironmentAccountConnectionHeaders 
    Request shared.DeleteEnvironmentAccountConnectionInput `request:"mediaType=application/json"`
    
}

type DeleteEnvironmentAccountConnectionResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    DeleteEnvironmentAccountConnectionOutput *shared.DeleteEnvironmentAccountConnectionOutput 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

