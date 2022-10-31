package operations

import (
"openapi/pkg/models/shared")

type ListWorkloadsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListWorkloadsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListWorkloadsRequestBody struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    WorkloadNamePrefix *string `json:"WorkloadNamePrefix,omitempty"`
    
}

type ListWorkloadsRequest struct {
    QueryParams ListWorkloadsQueryParams 
    Headers ListWorkloadsHeaders 
    Request ListWorkloadsRequestBody `request:"mediaType=application/json"`
    
}

type ListWorkloadsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListWorkloadsOutput *shared.ListWorkloadsOutput 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

