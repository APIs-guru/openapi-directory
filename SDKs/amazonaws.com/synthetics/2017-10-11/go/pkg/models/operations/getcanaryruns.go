package operations

import (
"openapi/pkg/models/shared")

type GetCanaryRunsPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetCanaryRunsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type GetCanaryRunsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCanaryRunsRequestBody struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

type GetCanaryRunsRequest struct {
    PathParams GetCanaryRunsPathParams 
    QueryParams GetCanaryRunsQueryParams 
    Headers GetCanaryRunsHeaders 
    Request GetCanaryRunsRequestBody `request:"mediaType=application/json"`
    
}

type GetCanaryRunsResponse struct {
    ContentType string 
    GetCanaryRunsResponse *shared.GetCanaryRunsResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

