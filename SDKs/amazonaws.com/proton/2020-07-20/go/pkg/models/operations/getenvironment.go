package operations

import (
"openapi/pkg/models/shared")


type GetEnvironmentXAmzTargetEnum string

const (
    GetEnvironmentXAmzTargetEnumAwsProton20200720GetEnvironment GetEnvironmentXAmzTargetEnum = "AwsProton20200720.GetEnvironment"
)


type GetEnvironmentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetEnvironmentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetEnvironmentRequest struct {
    Headers GetEnvironmentHeaders 
    Request shared.GetEnvironmentInput `request:"mediaType=application/json"`
    
}

type GetEnvironmentResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetEnvironmentOutput *shared.GetEnvironmentOutput 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

