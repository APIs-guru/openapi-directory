package operations

import (
"openapi/pkg/models/shared")

type GetGetQueueAttributesPathParams struct {
    AccountNumber int64 `pathParam:"style=simple,explode=false,name=AccountNumber"`
    QueueName string `pathParam:"style=simple,explode=false,name=QueueName"`
    
}


type GetGetQueueAttributesActionEnum string

const (
    GetGetQueueAttributesActionEnumGetQueueAttributes GetGetQueueAttributesActionEnum = "GetQueueAttributes"
)



type GetGetQueueAttributesVersionEnum string

const (
    GetGetQueueAttributesVersionEnumTwoThousandAndTwelve1105 GetGetQueueAttributesVersionEnum = "2012-11-05"
)


type GetGetQueueAttributesQueryParams struct {
    Action GetGetQueueAttributesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AttributeNames []shared.QueueAttributeNameEnum `queryParam:"style=form,explode=true,name=AttributeNames"`
    Version GetGetQueueAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetQueueAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetQueueAttributesRequest struct {
    PathParams GetGetQueueAttributesPathParams 
    QueryParams GetGetQueueAttributesQueryParams 
    Headers GetGetQueueAttributesHeaders 
    
}

type GetGetQueueAttributesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

