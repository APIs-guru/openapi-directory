package operations




type PostTagQueueActionEnum string

const (
    PostTagQueueActionEnumTagQueue PostTagQueueActionEnum = "TagQueue"
)



type PostTagQueueVersionEnum string

const (
    PostTagQueueVersionEnumTwoThousandAndTwelve1105 PostTagQueueVersionEnum = "2012-11-05"
)


type PostTagQueueQueryParams struct {
    Action PostTagQueueActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostTagQueueVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostTagQueueHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostTagQueueRequest struct {
    QueryParams PostTagQueueQueryParams 
    Headers PostTagQueueHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostTagQueueResponse struct {
    ContentType string 
    StatusCode int64 
    
}

