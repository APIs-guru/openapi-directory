package operations

import (
"openapi/pkg/models/shared")

type BatchEnableStandardsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type BatchEnableStandardsRequestBody struct {
    StandardsSubscriptionRequests []shared.StandardsSubscriptionRequest `json:"StandardsSubscriptionRequests"`
    
}

type BatchEnableStandardsRequest struct {
    Headers BatchEnableStandardsHeaders 
    Request BatchEnableStandardsRequestBody `request:"mediaType=application/json"`
    
}

type BatchEnableStandardsResponse struct {
    BatchEnableStandardsResponse *shared.BatchEnableStandardsResponse 
    ContentType string 
    InternalException *interface{} 
    InvalidAccessException *interface{} 
    InvalidInputException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    
}

