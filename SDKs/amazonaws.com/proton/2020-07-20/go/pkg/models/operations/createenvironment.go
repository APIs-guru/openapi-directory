package operations

import (
"openapi/pkg/models/shared")


type CreateEnvironmentXAmzTargetEnum string

const (
    CreateEnvironmentXAmzTargetEnumAwsProton20200720CreateEnvironment CreateEnvironmentXAmzTargetEnum = "AwsProton20200720.CreateEnvironment"
)


type CreateEnvironmentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateEnvironmentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateEnvironmentRequest struct {
    Headers CreateEnvironmentHeaders 
    Request shared.CreateEnvironmentInput `request:"mediaType=application/json"`
    
}

type CreateEnvironmentResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateEnvironmentOutput *shared.CreateEnvironmentOutput 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

