package operations

import (
"openapi/pkg/models/shared")

type ListOpenWorkflowExecutionsQueryParams struct {
    MaximumPageSize *string `queryParam:"style=form,explode=true,name=maximumPageSize"`
    NextPageToken *string `queryParam:"style=form,explode=true,name=nextPageToken"`
    
}


type ListOpenWorkflowExecutionsXAmzTargetEnum string

const (
    ListOpenWorkflowExecutionsXAmzTargetEnumSimpleWorkflowServiceListOpenWorkflowExecutions ListOpenWorkflowExecutionsXAmzTargetEnum = "SimpleWorkflowService.ListOpenWorkflowExecutions"
)


type ListOpenWorkflowExecutionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListOpenWorkflowExecutionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListOpenWorkflowExecutionsRequest struct {
    QueryParams ListOpenWorkflowExecutionsQueryParams 
    Headers ListOpenWorkflowExecutionsHeaders 
    Request shared.ListOpenWorkflowExecutionsInput `request:"mediaType=application/json"`
    
}

type ListOpenWorkflowExecutionsResponse struct {
    ContentType string 
    OperationNotPermittedFault *interface{} 
    StatusCode int64 
    UnknownResourceFault *interface{} 
    WorkflowExecutionInfos *shared.WorkflowExecutionInfos 
    
}

