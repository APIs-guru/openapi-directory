package operations

import (
"openapi/pkg/models/shared")


type CreateTrialXAmzTargetEnum string

const (
    CreateTrialXAmzTargetEnumSageMakerCreateTrial CreateTrialXAmzTargetEnum = "SageMaker.CreateTrial"
)


type CreateTrialHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateTrialXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateTrialRequest struct {
    Headers CreateTrialHeaders 
    Request shared.CreateTrialRequest `request:"mediaType=application/json"`
    
}

type CreateTrialResponse struct {
    ContentType string 
    CreateTrialResponse *shared.CreateTrialResponse 
    ResourceLimitExceeded *interface{} 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

