package operations

import (
"openapi/pkg/models/shared")

type DescribeEventsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeEventsXAmzTargetEnum string

const (
    DescribeEventsXAmzTargetEnumOpsWorksCmV20161101DescribeEvents DescribeEventsXAmzTargetEnum = "OpsWorksCM_V2016_11_01.DescribeEvents"
)


type DescribeEventsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeEventsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeEventsRequest struct {
    QueryParams DescribeEventsQueryParams 
    Headers DescribeEventsHeaders 
    Request shared.DescribeEventsRequest `request:"mediaType=application/json"`
    
}

type DescribeEventsResponse struct {
    ContentType string 
    DescribeEventsResponse *shared.DescribeEventsResponse 
    InvalidNextTokenException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

