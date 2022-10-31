package operations

import (
"openapi/pkg/models/shared")

type ListStreamKeysQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListStreamKeysHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListStreamKeysRequestBody struct {
    ChannelArn string `json:"channelArn"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

type ListStreamKeysRequest struct {
    QueryParams ListStreamKeysQueryParams 
    Headers ListStreamKeysHeaders 
    Request ListStreamKeysRequestBody `request:"mediaType=application/json"`
    
}

type ListStreamKeysResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    ListStreamKeysResponse *shared.ListStreamKeysResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

