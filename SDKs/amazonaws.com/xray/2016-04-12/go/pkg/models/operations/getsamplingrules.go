package operations

import (
"openapi/pkg/models/shared")

type GetSamplingRulesQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type GetSamplingRulesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetSamplingRulesRequestBody struct {
    NextToken *string `json:"NextToken,omitempty"`
    
}

type GetSamplingRulesRequest struct {
    QueryParams GetSamplingRulesQueryParams 
    Headers GetSamplingRulesHeaders 
    Request GetSamplingRulesRequestBody `request:"mediaType=application/json"`
    
}

type GetSamplingRulesResponse struct {
    ContentType string 
    GetSamplingRulesResult *shared.GetSamplingRulesResult 
    InvalidRequestException *interface{} 
    StatusCode int64 
    ThrottledException *interface{} 
    
}

