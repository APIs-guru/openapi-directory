package operations

import (
"openapi/pkg/models/shared")

type BatchGetTracesQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type BatchGetTracesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type BatchGetTracesRequestBody struct {
    NextToken *string `json:"NextToken,omitempty"`
    TraceIds []string `json:"TraceIds"`
    
}

type BatchGetTracesRequest struct {
    QueryParams BatchGetTracesQueryParams 
    Headers BatchGetTracesHeaders 
    Request BatchGetTracesRequestBody `request:"mediaType=application/json"`
    
}

type BatchGetTracesResponse struct {
    BatchGetTracesResult *shared.BatchGetTracesResult 
    ContentType string 
    InvalidRequestException *interface{} 
    StatusCode int64 
    ThrottledException *interface{} 
    
}

