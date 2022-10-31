package operations




type GetDeleteEventSubscriptionActionEnum string

const (
    GetDeleteEventSubscriptionActionEnumDeleteEventSubscription GetDeleteEventSubscriptionActionEnum = "DeleteEventSubscription"
)



type GetDeleteEventSubscriptionVersionEnum string

const (
    GetDeleteEventSubscriptionVersionEnumTwoThousandAndThirteen0110 GetDeleteEventSubscriptionVersionEnum = "2013-01-10"
)


type GetDeleteEventSubscriptionQueryParams struct {
    Action GetDeleteEventSubscriptionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    SubscriptionName string `queryParam:"style=form,explode=true,name=SubscriptionName"`
    Version GetDeleteEventSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteEventSubscriptionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteEventSubscriptionRequest struct {
    QueryParams GetDeleteEventSubscriptionQueryParams 
    Headers GetDeleteEventSubscriptionHeaders 
    
}

type GetDeleteEventSubscriptionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

