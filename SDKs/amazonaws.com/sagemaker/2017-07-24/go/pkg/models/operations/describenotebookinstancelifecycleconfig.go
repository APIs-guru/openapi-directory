package operations

import (
"openapi/pkg/models/shared")


type DescribeNotebookInstanceLifecycleConfigXAmzTargetEnum string

const (
    DescribeNotebookInstanceLifecycleConfigXAmzTargetEnumSageMakerDescribeNotebookInstanceLifecycleConfig DescribeNotebookInstanceLifecycleConfigXAmzTargetEnum = "SageMaker.DescribeNotebookInstanceLifecycleConfig"
)


type DescribeNotebookInstanceLifecycleConfigHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeNotebookInstanceLifecycleConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeNotebookInstanceLifecycleConfigRequest struct {
    Headers DescribeNotebookInstanceLifecycleConfigHeaders 
    Request shared.DescribeNotebookInstanceLifecycleConfigInput `request:"mediaType=application/json"`
    
}

type DescribeNotebookInstanceLifecycleConfigResponse struct {
    ContentType string 
    DescribeNotebookInstanceLifecycleConfigOutput *shared.DescribeNotebookInstanceLifecycleConfigOutput 
    StatusCode int64 
    
}

