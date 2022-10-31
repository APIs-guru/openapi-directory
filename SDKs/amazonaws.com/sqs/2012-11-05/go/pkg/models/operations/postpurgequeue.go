package operations




type PostPurgeQueueActionEnum string

const (
    PostPurgeQueueActionEnumPurgeQueue PostPurgeQueueActionEnum = "PurgeQueue"
)



type PostPurgeQueueVersionEnum string

const (
    PostPurgeQueueVersionEnumTwoThousandAndTwelve1105 PostPurgeQueueVersionEnum = "2012-11-05"
)


type PostPurgeQueueQueryParams struct {
    Action PostPurgeQueueActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostPurgeQueueVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostPurgeQueueHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostPurgeQueueRequest struct {
    QueryParams PostPurgeQueueQueryParams 
    Headers PostPurgeQueueHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostPurgeQueueResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

