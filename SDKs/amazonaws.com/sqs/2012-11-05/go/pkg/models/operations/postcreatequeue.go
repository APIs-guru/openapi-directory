package operations




type PostCreateQueueActionEnum string

const (
    PostCreateQueueActionEnumCreateQueue PostCreateQueueActionEnum = "CreateQueue"
)



type PostCreateQueueVersionEnum string

const (
    PostCreateQueueVersionEnumTwoThousandAndTwelve1105 PostCreateQueueVersionEnum = "2012-11-05"
)


type PostCreateQueueQueryParams struct {
    Action PostCreateQueueActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateQueueVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateQueueHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateQueueRequest struct {
    QueryParams PostCreateQueueQueryParams 
    Headers PostCreateQueueHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateQueueResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

