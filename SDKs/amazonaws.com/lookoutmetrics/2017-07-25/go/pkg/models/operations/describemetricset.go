package operations

import (
"openapi/pkg/models/shared")

type DescribeMetricSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeMetricSetRequestBody struct {
    MetricSetArn string `json:"MetricSetArn"`
    
}

type DescribeMetricSetRequest struct {
    Headers DescribeMetricSetHeaders 
    Request DescribeMetricSetRequestBody `request:"mediaType=application/json"`
    
}

type DescribeMetricSetResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeMetricSetResponse *shared.DescribeMetricSetResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    ValidationException *interface{} 
    
}

