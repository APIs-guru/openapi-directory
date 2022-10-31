package operations




type PostDeleteQueueActionEnum string

const (
    PostDeleteQueueActionEnumDeleteQueue PostDeleteQueueActionEnum = "DeleteQueue"
)



type PostDeleteQueueVersionEnum string

const (
    PostDeleteQueueVersionEnumTwoThousandAndTwelve1105 PostDeleteQueueVersionEnum = "2012-11-05"
)


type PostDeleteQueueQueryParams struct {
    Action PostDeleteQueueActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteQueueVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteQueueHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteQueueRequest struct {
    QueryParams PostDeleteQueueQueryParams 
    Headers PostDeleteQueueHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteQueueResponse struct {
    ContentType string 
    StatusCode int64 
    
}

