package operations

import (
"openapi/pkg/models/shared")

type ListNotebookInstancesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListNotebookInstancesXAmzTargetEnum string

const (
    ListNotebookInstancesXAmzTargetEnumSageMakerListNotebookInstances ListNotebookInstancesXAmzTargetEnum = "SageMaker.ListNotebookInstances"
)


type ListNotebookInstancesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListNotebookInstancesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListNotebookInstancesRequest struct {
    QueryParams ListNotebookInstancesQueryParams 
    Headers ListNotebookInstancesHeaders 
    Request shared.ListNotebookInstancesInput `request:"mediaType=application/json"`
    
}

type ListNotebookInstancesResponse struct {
    ContentType string 
    ListNotebookInstancesOutput *shared.ListNotebookInstancesOutput 
    StatusCode int64 
    
}

