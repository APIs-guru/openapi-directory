package operations

import (
"openapi/pkg/models/shared")


type DeleteActionXAmzTargetEnum string

const (
    DeleteActionXAmzTargetEnumSageMakerDeleteAction DeleteActionXAmzTargetEnum = "SageMaker.DeleteAction"
)


type DeleteActionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteActionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteActionRequest struct {
    Headers DeleteActionHeaders 
    Request shared.DeleteActionRequest `request:"mediaType=application/json"`
    
}

type DeleteActionResponse struct {
    ContentType string 
    DeleteActionResponse *shared.DeleteActionResponse 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

