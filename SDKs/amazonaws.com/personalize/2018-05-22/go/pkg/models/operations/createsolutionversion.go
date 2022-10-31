package operations

import (
"openapi/pkg/models/shared")


type CreateSolutionVersionXAmzTargetEnum string

const (
    CreateSolutionVersionXAmzTargetEnumAmazonPersonalizeCreateSolutionVersion CreateSolutionVersionXAmzTargetEnum = "AmazonPersonalize.CreateSolutionVersion"
)


type CreateSolutionVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateSolutionVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateSolutionVersionRequest struct {
    Headers CreateSolutionVersionHeaders 
    Request shared.CreateSolutionVersionRequest `request:"mediaType=application/json"`
    
}

type CreateSolutionVersionResponse struct {
    ContentType string 
    CreateSolutionVersionResponse *shared.CreateSolutionVersionResponse 
    InvalidInputException *interface{} 
    LimitExceededException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

