package operations

import (
"openapi/pkg/models/shared")


type CreateNotebookInstanceLifecycleConfigXAmzTargetEnum string

const (
    CreateNotebookInstanceLifecycleConfigXAmzTargetEnumSageMakerCreateNotebookInstanceLifecycleConfig CreateNotebookInstanceLifecycleConfigXAmzTargetEnum = "SageMaker.CreateNotebookInstanceLifecycleConfig"
)


type CreateNotebookInstanceLifecycleConfigHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateNotebookInstanceLifecycleConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateNotebookInstanceLifecycleConfigRequest struct {
    Headers CreateNotebookInstanceLifecycleConfigHeaders 
    Request shared.CreateNotebookInstanceLifecycleConfigInput `request:"mediaType=application/json"`
    
}

type CreateNotebookInstanceLifecycleConfigResponse struct {
    ContentType string 
    CreateNotebookInstanceLifecycleConfigOutput *shared.CreateNotebookInstanceLifecycleConfigOutput 
    ResourceLimitExceeded *interface{} 
    StatusCode int64 
    
}

