package operations

import (
"openapi/pkg/models/shared")


type CancelServiceInstanceDeploymentXAmzTargetEnum string

const (
    CancelServiceInstanceDeploymentXAmzTargetEnumAwsProton20200720CancelServiceInstanceDeployment CancelServiceInstanceDeploymentXAmzTargetEnum = "AwsProton20200720.CancelServiceInstanceDeployment"
)


type CancelServiceInstanceDeploymentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CancelServiceInstanceDeploymentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CancelServiceInstanceDeploymentRequest struct {
    Headers CancelServiceInstanceDeploymentHeaders 
    Request shared.CancelServiceInstanceDeploymentInput `request:"mediaType=application/json"`
    
}

type CancelServiceInstanceDeploymentResponse struct {
    AccessDeniedException *interface{} 
    CancelServiceInstanceDeploymentOutput *shared.CancelServiceInstanceDeploymentOutput 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

