package operations

import (
"openapi/pkg/models/shared")

type DescribeRouteCalculatorPathParams struct {
    CalculatorName string `pathParam:"style=simple,explode=false,name=CalculatorName"`
    
}

type DescribeRouteCalculatorHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeRouteCalculatorRequest struct {
    PathParams DescribeRouteCalculatorPathParams 
    Headers DescribeRouteCalculatorHeaders 
    
}

type DescribeRouteCalculatorResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeRouteCalculatorResponse *shared.DescribeRouteCalculatorResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

