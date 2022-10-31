package operations

import (
"openapi/pkg/models/shared")


type StopNotebookInstanceXAmzTargetEnum string

const (
    StopNotebookInstanceXAmzTargetEnumSageMakerStopNotebookInstance StopNotebookInstanceXAmzTargetEnum = "SageMaker.StopNotebookInstance"
)


type StopNotebookInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopNotebookInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopNotebookInstanceRequest struct {
    Headers StopNotebookInstanceHeaders 
    Request shared.StopNotebookInstanceInput `request:"mediaType=application/json"`
    
}

type StopNotebookInstanceResponse struct {
    ContentType string 
    StatusCode int64 
    
}

