package operations

import (
"openapi/pkg/models/shared")


type DisassociateTrialComponentXAmzTargetEnum string

const (
    DisassociateTrialComponentXAmzTargetEnumSageMakerDisassociateTrialComponent DisassociateTrialComponentXAmzTargetEnum = "SageMaker.DisassociateTrialComponent"
)


type DisassociateTrialComponentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisassociateTrialComponentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisassociateTrialComponentRequest struct {
    Headers DisassociateTrialComponentHeaders 
    Request shared.DisassociateTrialComponentRequest `request:"mediaType=application/json"`
    
}

type DisassociateTrialComponentResponse struct {
    ContentType string 
    DisassociateTrialComponentResponse *shared.DisassociateTrialComponentResponse 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

