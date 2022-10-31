package operations

import (
"openapi/pkg/models/shared")

type BatchDisableStandardsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type BatchDisableStandardsRequestBody struct {
    StandardsSubscriptionArns []string `json:"StandardsSubscriptionArns"`
    
}

type BatchDisableStandardsRequest struct {
    Headers BatchDisableStandardsHeaders 
    Request BatchDisableStandardsRequestBody `request:"mediaType=application/json"`
    
}

type BatchDisableStandardsResponse struct {
    BatchDisableStandardsResponse *shared.BatchDisableStandardsResponse 
    ContentType string 
    InternalException *interface{} 
    InvalidAccessException *interface{} 
    InvalidInputException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    
}

