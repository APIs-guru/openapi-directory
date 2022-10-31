package operations

import (
"openapi/pkg/models/shared")

type SyncDeploymentJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type SyncDeploymentJobRequestBody struct {
    ClientRequestToken string `json:"clientRequestToken"`
    Fleet string `json:"fleet"`
    
}

type SyncDeploymentJobRequest struct {
    Headers SyncDeploymentJobHeaders 
    Request SyncDeploymentJobRequestBody `request:"mediaType=application/json"`
    
}

type SyncDeploymentJobResponse struct {
    ConcurrentDeploymentException *interface{} 
    ContentType string 
    IdempotentParameterMismatchException *interface{} 
    InternalServerException *interface{} 
    InvalidParameterException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    SyncDeploymentJobResponse *shared.SyncDeploymentJobResponse 
    ThrottlingException *interface{} 
    
}

