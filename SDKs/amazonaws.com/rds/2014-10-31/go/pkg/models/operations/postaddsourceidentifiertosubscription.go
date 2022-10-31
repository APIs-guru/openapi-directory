package operations




type PostAddSourceIdentifierToSubscriptionActionEnum string

const (
    PostAddSourceIdentifierToSubscriptionActionEnumAddSourceIdentifierToSubscription PostAddSourceIdentifierToSubscriptionActionEnum = "AddSourceIdentifierToSubscription"
)



type PostAddSourceIdentifierToSubscriptionVersionEnum string

const (
    PostAddSourceIdentifierToSubscriptionVersionEnumTwoThousandAndFourteen1031 PostAddSourceIdentifierToSubscriptionVersionEnum = "2014-10-31"
)


type PostAddSourceIdentifierToSubscriptionQueryParams struct {
    Action PostAddSourceIdentifierToSubscriptionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostAddSourceIdentifierToSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostAddSourceIdentifierToSubscriptionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostAddSourceIdentifierToSubscriptionRequest struct {
    QueryParams PostAddSourceIdentifierToSubscriptionQueryParams 
    Headers PostAddSourceIdentifierToSubscriptionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostAddSourceIdentifierToSubscriptionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

