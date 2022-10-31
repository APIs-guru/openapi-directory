package operations

import (
"openapi/pkg/models/shared")

type ListWorkflowsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListWorkflowsXAmzTargetEnum string

const (
    ListWorkflowsXAmzTargetEnumTransferServiceListWorkflows ListWorkflowsXAmzTargetEnum = "TransferService.ListWorkflows"
)


type ListWorkflowsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListWorkflowsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListWorkflowsRequest struct {
    QueryParams ListWorkflowsQueryParams 
    Headers ListWorkflowsHeaders 
    Request shared.ListWorkflowsRequest `request:"mediaType=application/json"`
    
}

type ListWorkflowsResponse struct {
    ContentType string 
    InternalServiceError *interface{} 
    InvalidNextTokenException *interface{} 
    InvalidRequestException *interface{} 
    ListWorkflowsResponse *shared.ListWorkflowsResponse 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

