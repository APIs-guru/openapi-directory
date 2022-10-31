package operations

import (
"openapi/pkg/models/shared")

type ListClosedWorkflowExecutionsQueryParams struct {
    MaximumPageSize *string `queryParam:"style=form,explode=true,name=maximumPageSize"`
    NextPageToken *string `queryParam:"style=form,explode=true,name=nextPageToken"`
    
}


type ListClosedWorkflowExecutionsXAmzTargetEnum string

const (
    ListClosedWorkflowExecutionsXAmzTargetEnumSimpleWorkflowServiceListClosedWorkflowExecutions ListClosedWorkflowExecutionsXAmzTargetEnum = "SimpleWorkflowService.ListClosedWorkflowExecutions"
)


type ListClosedWorkflowExecutionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListClosedWorkflowExecutionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListClosedWorkflowExecutionsRequest struct {
    QueryParams ListClosedWorkflowExecutionsQueryParams 
    Headers ListClosedWorkflowExecutionsHeaders 
    Request shared.ListClosedWorkflowExecutionsInput `request:"mediaType=application/json"`
    
}

type ListClosedWorkflowExecutionsResponse struct {
    ContentType string 
    OperationNotPermittedFault *interface{} 
    StatusCode int64 
    UnknownResourceFault *interface{} 
    WorkflowExecutionInfos *shared.WorkflowExecutionInfos 
    
}

