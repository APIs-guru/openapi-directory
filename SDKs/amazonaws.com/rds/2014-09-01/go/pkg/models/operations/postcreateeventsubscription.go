package operations




type PostCreateEventSubscriptionActionEnum string

const (
    PostCreateEventSubscriptionActionEnumCreateEventSubscription PostCreateEventSubscriptionActionEnum = "CreateEventSubscription"
)



type PostCreateEventSubscriptionVersionEnum string

const (
    PostCreateEventSubscriptionVersionEnumTwoThousandAndFourteen0901 PostCreateEventSubscriptionVersionEnum = "2014-09-01"
)


type PostCreateEventSubscriptionQueryParams struct {
    Action PostCreateEventSubscriptionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateEventSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateEventSubscriptionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateEventSubscriptionRequest struct {
    QueryParams PostCreateEventSubscriptionQueryParams 
    Headers PostCreateEventSubscriptionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateEventSubscriptionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

