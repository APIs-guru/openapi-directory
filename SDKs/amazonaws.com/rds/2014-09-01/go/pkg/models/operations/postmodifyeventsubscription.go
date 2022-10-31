package operations




type PostModifyEventSubscriptionActionEnum string

const (
    PostModifyEventSubscriptionActionEnumModifyEventSubscription PostModifyEventSubscriptionActionEnum = "ModifyEventSubscription"
)



type PostModifyEventSubscriptionVersionEnum string

const (
    PostModifyEventSubscriptionVersionEnumTwoThousandAndFourteen0901 PostModifyEventSubscriptionVersionEnum = "2014-09-01"
)


type PostModifyEventSubscriptionQueryParams struct {
    Action PostModifyEventSubscriptionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyEventSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyEventSubscriptionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyEventSubscriptionRequest struct {
    QueryParams PostModifyEventSubscriptionQueryParams 
    Headers PostModifyEventSubscriptionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyEventSubscriptionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

