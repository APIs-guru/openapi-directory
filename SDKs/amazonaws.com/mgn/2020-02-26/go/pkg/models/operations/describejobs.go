package operations

import (
"openapi/pkg/models/shared")

type DescribeJobsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type DescribeJobsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeJobsRequestBodyFilters struct {
    FromDate *string `json:"fromDate,omitempty"`
    JobIDs []string `json:"jobIDs,omitempty"`
    ToDate *string `json:"toDate,omitempty"`
    
}

type DescribeJobsRequestBody struct {
    Filters DescribeJobsRequestBodyFilters `json:"filters"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

type DescribeJobsRequest struct {
    QueryParams DescribeJobsQueryParams 
    Headers DescribeJobsHeaders 
    Request DescribeJobsRequestBody `request:"mediaType=application/json"`
    
}

type DescribeJobsResponse struct {
    ContentType string 
    DescribeJobsResponse *shared.DescribeJobsResponse 
    StatusCode int64 
    UninitializedAccountException *interface{} 
    ValidationException *interface{} 
    
}

