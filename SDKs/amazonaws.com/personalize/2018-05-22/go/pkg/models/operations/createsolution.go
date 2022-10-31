package operations

import (
"openapi/pkg/models/shared")


type CreateSolutionXAmzTargetEnum string

const (
    CreateSolutionXAmzTargetEnumAmazonPersonalizeCreateSolution CreateSolutionXAmzTargetEnum = "AmazonPersonalize.CreateSolution"
)


type CreateSolutionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateSolutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateSolutionRequest struct {
    Headers CreateSolutionHeaders 
    Request shared.CreateSolutionRequest `request:"mediaType=application/json"`
    
}

type CreateSolutionResponse struct {
    ContentType string 
    CreateSolutionResponse *shared.CreateSolutionResponse 
    InvalidInputException *interface{} 
    LimitExceededException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

