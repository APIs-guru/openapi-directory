package operations

import (
"openapi/pkg/models/shared")


type AssociateTrialComponentXAmzTargetEnum string

const (
    AssociateTrialComponentXAmzTargetEnumSageMakerAssociateTrialComponent AssociateTrialComponentXAmzTargetEnum = "SageMaker.AssociateTrialComponent"
)


type AssociateTrialComponentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AssociateTrialComponentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AssociateTrialComponentRequest struct {
    Headers AssociateTrialComponentHeaders 
    Request shared.AssociateTrialComponentRequest `request:"mediaType=application/json"`
    
}

type AssociateTrialComponentResponse struct {
    AssociateTrialComponentResponse *shared.AssociateTrialComponentResponse 
    ContentType string 
    ResourceLimitExceeded *interface{} 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

