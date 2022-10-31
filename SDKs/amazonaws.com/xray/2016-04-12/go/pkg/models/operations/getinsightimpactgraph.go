package operations

import (
"time"
"openapi/pkg/models/shared")

type GetInsightImpactGraphHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetInsightImpactGraphRequestBody struct {
    EndTime time.Time `json:"EndTime"`
    InsightID string `json:"InsightId"`
    NextToken *string `json:"NextToken,omitempty"`
    StartTime time.Time `json:"StartTime"`
    
}

type GetInsightImpactGraphRequest struct {
    Headers GetInsightImpactGraphHeaders 
    Request GetInsightImpactGraphRequestBody `request:"mediaType=application/json"`
    
}

type GetInsightImpactGraphResponse struct {
    ContentType string 
    GetInsightImpactGraphResult *shared.GetInsightImpactGraphResult 
    InvalidRequestException *interface{} 
    StatusCode int64 
    ThrottledException *interface{} 
    
}

