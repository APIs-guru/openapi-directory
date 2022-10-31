package operations

import (
"openapi/pkg/models/shared")

type ListWorkflowTypesQueryParams struct {
    MaximumPageSize *string `queryParam:"style=form,explode=true,name=maximumPageSize"`
    NextPageToken *string `queryParam:"style=form,explode=true,name=nextPageToken"`
    
}


type ListWorkflowTypesXAmzTargetEnum string

const (
    ListWorkflowTypesXAmzTargetEnumSimpleWorkflowServiceListWorkflowTypes ListWorkflowTypesXAmzTargetEnum = "SimpleWorkflowService.ListWorkflowTypes"
)


type ListWorkflowTypesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListWorkflowTypesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListWorkflowTypesRequest struct {
    QueryParams ListWorkflowTypesQueryParams 
    Headers ListWorkflowTypesHeaders 
    Request shared.ListWorkflowTypesInput `request:"mediaType=application/json"`
    
}

type ListWorkflowTypesResponse struct {
    ContentType string 
    OperationNotPermittedFault *interface{} 
    StatusCode int64 
    UnknownResourceFault *interface{} 
    WorkflowTypeInfos *shared.WorkflowTypeInfos 
    
}

