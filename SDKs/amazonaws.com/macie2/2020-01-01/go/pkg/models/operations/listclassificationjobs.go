package operations

import (
"openapi/pkg/models/shared")

type ListClassificationJobsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListClassificationJobsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListClassificationJobsRequestBodyFilterCriteria struct {
    Excludes []shared.ListJobsFilterTerm `json:"excludes,omitempty"`
    Includes []shared.ListJobsFilterTerm `json:"includes,omitempty"`
    
}

type ListClassificationJobsRequestBodySortCriteria struct {
    AttributeName *shared.ListJobsSortAttributeNameEnum `json:"attributeName,omitempty"`
    OrderBy *shared.OrderByEnum `json:"orderBy,omitempty"`
    
}

type ListClassificationJobsRequestBody struct {
    FilterCriteria *ListClassificationJobsRequestBodyFilterCriteria `json:"filterCriteria,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    SortCriteria *ListClassificationJobsRequestBodySortCriteria `json:"sortCriteria,omitempty"`
    
}

type ListClassificationJobsRequest struct {
    QueryParams ListClassificationJobsQueryParams 
    Headers ListClassificationJobsHeaders 
    Request ListClassificationJobsRequestBody `request:"mediaType=application/json"`
    
}

type ListClassificationJobsResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListClassificationJobsResponse *shared.ListClassificationJobsResponse 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

