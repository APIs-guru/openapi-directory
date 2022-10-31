package operations

import (
"openapi/pkg/models/shared")


type CancelEnvironmentDeploymentXAmzTargetEnum string

const (
    CancelEnvironmentDeploymentXAmzTargetEnumAwsProton20200720CancelEnvironmentDeployment CancelEnvironmentDeploymentXAmzTargetEnum = "AwsProton20200720.CancelEnvironmentDeployment"
)


type CancelEnvironmentDeploymentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CancelEnvironmentDeploymentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CancelEnvironmentDeploymentRequest struct {
    Headers CancelEnvironmentDeploymentHeaders 
    Request shared.CancelEnvironmentDeploymentInput `request:"mediaType=application/json"`
    
}

type CancelEnvironmentDeploymentResponse struct {
    AccessDeniedException *interface{} 
    CancelEnvironmentDeploymentOutput *shared.CancelEnvironmentDeploymentOutput 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

