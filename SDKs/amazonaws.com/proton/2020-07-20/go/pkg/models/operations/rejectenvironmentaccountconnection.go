package operations

import (
"openapi/pkg/models/shared")


type RejectEnvironmentAccountConnectionXAmzTargetEnum string

const (
    RejectEnvironmentAccountConnectionXAmzTargetEnumAwsProton20200720RejectEnvironmentAccountConnection RejectEnvironmentAccountConnectionXAmzTargetEnum = "AwsProton20200720.RejectEnvironmentAccountConnection"
)


type RejectEnvironmentAccountConnectionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RejectEnvironmentAccountConnectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RejectEnvironmentAccountConnectionRequest struct {
    Headers RejectEnvironmentAccountConnectionHeaders 
    Request shared.RejectEnvironmentAccountConnectionInput `request:"mediaType=application/json"`
    
}

type RejectEnvironmentAccountConnectionResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    RejectEnvironmentAccountConnectionOutput *shared.RejectEnvironmentAccountConnectionOutput 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

