package operations




type PostListDeadLetterSourceQueuesActionEnum string

const (
    PostListDeadLetterSourceQueuesActionEnumListDeadLetterSourceQueues PostListDeadLetterSourceQueuesActionEnum = "ListDeadLetterSourceQueues"
)



type PostListDeadLetterSourceQueuesVersionEnum string

const (
    PostListDeadLetterSourceQueuesVersionEnumTwoThousandAndTwelve1105 PostListDeadLetterSourceQueuesVersionEnum = "2012-11-05"
)


type PostListDeadLetterSourceQueuesQueryParams struct {
    Action PostListDeadLetterSourceQueuesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostListDeadLetterSourceQueuesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostListDeadLetterSourceQueuesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostListDeadLetterSourceQueuesRequest struct {
    QueryParams PostListDeadLetterSourceQueuesQueryParams 
    Headers PostListDeadLetterSourceQueuesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostListDeadLetterSourceQueuesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

