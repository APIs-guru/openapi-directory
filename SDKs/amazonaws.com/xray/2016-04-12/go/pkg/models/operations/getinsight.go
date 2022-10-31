package operations

import (
"openapi/pkg/models/shared")

type GetInsightHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetInsightRequestBody struct {
    InsightID string `json:"InsightId"`
    
}

type GetInsightRequest struct {
    Headers GetInsightHeaders 
    Request GetInsightRequestBody `request:"mediaType=application/json"`
    
}

type GetInsightResponse struct {
    ContentType string 
    GetInsightResult *shared.GetInsightResult 
    InvalidRequestException *interface{} 
    StatusCode int64 
    ThrottledException *interface{} 
    
}

