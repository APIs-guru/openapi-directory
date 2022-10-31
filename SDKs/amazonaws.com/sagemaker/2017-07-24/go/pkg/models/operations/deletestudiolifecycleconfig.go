package operations

import (
"openapi/pkg/models/shared")


type DeleteStudioLifecycleConfigXAmzTargetEnum string

const (
    DeleteStudioLifecycleConfigXAmzTargetEnumSageMakerDeleteStudioLifecycleConfig DeleteStudioLifecycleConfigXAmzTargetEnum = "SageMaker.DeleteStudioLifecycleConfig"
)


type DeleteStudioLifecycleConfigHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteStudioLifecycleConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteStudioLifecycleConfigRequest struct {
    Headers DeleteStudioLifecycleConfigHeaders 
    Request shared.DeleteStudioLifecycleConfigRequest `request:"mediaType=application/json"`
    
}

type DeleteStudioLifecycleConfigResponse struct {
    ContentType string 
    ResourceInUse *interface{} 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

