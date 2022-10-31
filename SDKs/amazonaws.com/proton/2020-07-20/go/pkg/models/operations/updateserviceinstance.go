package operations

import (
"openapi/pkg/models/shared")


type UpdateServiceInstanceXAmzTargetEnum string

const (
    UpdateServiceInstanceXAmzTargetEnumAwsProton20200720UpdateServiceInstance UpdateServiceInstanceXAmzTargetEnum = "AwsProton20200720.UpdateServiceInstance"
)


type UpdateServiceInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateServiceInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateServiceInstanceRequest struct {
    Headers UpdateServiceInstanceHeaders 
    Request shared.UpdateServiceInstanceInput `request:"mediaType=application/json"`
    
}

type UpdateServiceInstanceResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateServiceInstanceOutput *shared.UpdateServiceInstanceOutput 
    ValidationException *interface{} 
    
}

