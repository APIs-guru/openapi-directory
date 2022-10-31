package operations

import (
"openapi/pkg/models/shared")

type DescribeActionTargetsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type DescribeActionTargetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeActionTargetsRequestBody struct {
    ActionTargetArns []string `json:"ActionTargetArns,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

type DescribeActionTargetsRequest struct {
    QueryParams DescribeActionTargetsQueryParams 
    Headers DescribeActionTargetsHeaders 
    Request DescribeActionTargetsRequestBody `request:"mediaType=application/json"`
    
}

type DescribeActionTargetsResponse struct {
    ContentType string 
    DescribeActionTargetsResponse *shared.DescribeActionTargetsResponse 
    InternalException *interface{} 
    InvalidAccessException *interface{} 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

