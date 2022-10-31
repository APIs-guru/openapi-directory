package operations

import (
"openapi/pkg/models/shared")


type DescribeNotebookInstanceXAmzTargetEnum string

const (
    DescribeNotebookInstanceXAmzTargetEnumSageMakerDescribeNotebookInstance DescribeNotebookInstanceXAmzTargetEnum = "SageMaker.DescribeNotebookInstance"
)


type DescribeNotebookInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeNotebookInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeNotebookInstanceRequest struct {
    Headers DescribeNotebookInstanceHeaders 
    Request shared.DescribeNotebookInstanceInput `request:"mediaType=application/json"`
    
}

type DescribeNotebookInstanceResponse struct {
    ContentType string 
    DescribeNotebookInstanceOutput *shared.DescribeNotebookInstanceOutput 
    StatusCode int64 
    
}

