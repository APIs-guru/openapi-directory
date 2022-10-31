package operations

import (
"openapi/pkg/models/shared")

type ListAnomalyGroupTimeSeriesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListAnomalyGroupTimeSeriesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListAnomalyGroupTimeSeriesRequestBody struct {
    AnomalyDetectorArn string `json:"AnomalyDetectorArn"`
    AnomalyGroupID string `json:"AnomalyGroupId"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    MetricName string `json:"MetricName"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

type ListAnomalyGroupTimeSeriesRequest struct {
    QueryParams ListAnomalyGroupTimeSeriesQueryParams 
    Headers ListAnomalyGroupTimeSeriesHeaders 
    Request ListAnomalyGroupTimeSeriesRequestBody `request:"mediaType=application/json"`
    
}

type ListAnomalyGroupTimeSeriesResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListAnomalyGroupTimeSeriesResponse *shared.ListAnomalyGroupTimeSeriesResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    ValidationException *interface{} 
    
}

