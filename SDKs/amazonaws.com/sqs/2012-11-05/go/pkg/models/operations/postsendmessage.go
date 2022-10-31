package operations




type PostSendMessageActionEnum string

const (
    PostSendMessageActionEnumSendMessage PostSendMessageActionEnum = "SendMessage"
)



type PostSendMessageVersionEnum string

const (
    PostSendMessageVersionEnumTwoThousandAndTwelve1105 PostSendMessageVersionEnum = "2012-11-05"
)


type PostSendMessageQueryParams struct {
    Action PostSendMessageActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostSendMessageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostSendMessageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostSendMessageRequest struct {
    QueryParams PostSendMessageQueryParams 
    Headers PostSendMessageHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostSendMessageResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

