package operations

import (
"openapi/pkg/models/shared")


type CreateStudioLifecycleConfigXAmzTargetEnum string

const (
    CreateStudioLifecycleConfigXAmzTargetEnumSageMakerCreateStudioLifecycleConfig CreateStudioLifecycleConfigXAmzTargetEnum = "SageMaker.CreateStudioLifecycleConfig"
)


type CreateStudioLifecycleConfigHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateStudioLifecycleConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateStudioLifecycleConfigRequest struct {
    Headers CreateStudioLifecycleConfigHeaders 
    Request shared.CreateStudioLifecycleConfigRequest `request:"mediaType=application/json"`
    
}

type CreateStudioLifecycleConfigResponse struct {
    ContentType string 
    CreateStudioLifecycleConfigResponse *shared.CreateStudioLifecycleConfigResponse 
    ResourceInUse *interface{} 
    StatusCode int64 
    
}

