package operations

import (
"openapi/pkg/models/shared")


type StartNotebookInstanceXAmzTargetEnum string

const (
    StartNotebookInstanceXAmzTargetEnumSageMakerStartNotebookInstance StartNotebookInstanceXAmzTargetEnum = "SageMaker.StartNotebookInstance"
)


type StartNotebookInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartNotebookInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartNotebookInstanceRequest struct {
    Headers StartNotebookInstanceHeaders 
    Request shared.StartNotebookInstanceInput `request:"mediaType=application/json"`
    
}

type StartNotebookInstanceResponse struct {
    ContentType string 
    ResourceLimitExceeded *interface{} 
    StatusCode int64 
    
}

