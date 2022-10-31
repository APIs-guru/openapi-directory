package operations

import (
"time"
"openapi/pkg/models/shared")

type GetInsightSummariesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type GetInsightSummariesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetInsightSummariesRequestBody struct {
    EndTime time.Time `json:"EndTime"`
    GroupArn *string `json:"GroupARN,omitempty"`
    GroupName *string `json:"GroupName,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    StartTime time.Time `json:"StartTime"`
    States []shared.InsightStateEnum `json:"States,omitempty"`
    
}

type GetInsightSummariesRequest struct {
    QueryParams GetInsightSummariesQueryParams 
    Headers GetInsightSummariesHeaders 
    Request GetInsightSummariesRequestBody `request:"mediaType=application/json"`
    
}

type GetInsightSummariesResponse struct {
    ContentType string 
    GetInsightSummariesResult *shared.GetInsightSummariesResult 
    InvalidRequestException *interface{} 
    StatusCode int64 
    ThrottledException *interface{} 
    
}

