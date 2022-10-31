package operations

import (
"openapi/pkg/models/shared")

type GetBotsQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NameContains *string `queryParam:"style=form,explode=true,name=nameContains"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type GetBotsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetBotsRequest struct {
    QueryParams GetBotsQueryParams 
    Headers GetBotsHeaders 
    
}

type GetBotsResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetBotsResponse *shared.GetBotsResponse 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

