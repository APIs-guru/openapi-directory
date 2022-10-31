package operations

import (
"openapi/pkg/models/shared")


type UpdateTrialComponentXAmzTargetEnum string

const (
    UpdateTrialComponentXAmzTargetEnumSageMakerUpdateTrialComponent UpdateTrialComponentXAmzTargetEnum = "SageMaker.UpdateTrialComponent"
)


type UpdateTrialComponentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateTrialComponentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateTrialComponentRequest struct {
    Headers UpdateTrialComponentHeaders 
    Request shared.UpdateTrialComponentRequest `request:"mediaType=application/json"`
    
}

type UpdateTrialComponentResponse struct {
    ConflictException *interface{} 
    ContentType string 
    ResourceNotFound *interface{} 
    StatusCode int64 
    UpdateTrialComponentResponse *shared.UpdateTrialComponentResponse 
    
}

