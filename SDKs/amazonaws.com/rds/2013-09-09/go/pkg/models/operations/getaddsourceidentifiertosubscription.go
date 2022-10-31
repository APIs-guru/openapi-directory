package operations




type GetAddSourceIdentifierToSubscriptionActionEnum string

const (
    GetAddSourceIdentifierToSubscriptionActionEnumAddSourceIdentifierToSubscription GetAddSourceIdentifierToSubscriptionActionEnum = "AddSourceIdentifierToSubscription"
)



type GetAddSourceIdentifierToSubscriptionVersionEnum string

const (
    GetAddSourceIdentifierToSubscriptionVersionEnumTwoThousandAndThirteen0909 GetAddSourceIdentifierToSubscriptionVersionEnum = "2013-09-09"
)


type GetAddSourceIdentifierToSubscriptionQueryParams struct {
    Action GetAddSourceIdentifierToSubscriptionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    SourceIdentifier string `queryParam:"style=form,explode=true,name=SourceIdentifier"`
    SubscriptionName string `queryParam:"style=form,explode=true,name=SubscriptionName"`
    Version GetAddSourceIdentifierToSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetAddSourceIdentifierToSubscriptionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAddSourceIdentifierToSubscriptionRequest struct {
    QueryParams GetAddSourceIdentifierToSubscriptionQueryParams 
    Headers GetAddSourceIdentifierToSubscriptionHeaders 
    
}

type GetAddSourceIdentifierToSubscriptionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

