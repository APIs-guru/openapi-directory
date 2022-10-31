package operations



type GetListDeadLetterSourceQueuesPathParams struct {
    AccountNumber int64 `pathParam:"style=simple,explode=false,name=AccountNumber"`
    QueueName string `pathParam:"style=simple,explode=false,name=QueueName"`
    
}


type GetListDeadLetterSourceQueuesActionEnum string

const (
    GetListDeadLetterSourceQueuesActionEnumListDeadLetterSourceQueues GetListDeadLetterSourceQueuesActionEnum = "ListDeadLetterSourceQueues"
)



type GetListDeadLetterSourceQueuesVersionEnum string

const (
    GetListDeadLetterSourceQueuesVersionEnumTwoThousandAndTwelve1105 GetListDeadLetterSourceQueuesVersionEnum = "2012-11-05"
)


type GetListDeadLetterSourceQueuesQueryParams struct {
    Action GetListDeadLetterSourceQueuesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version GetListDeadLetterSourceQueuesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetListDeadLetterSourceQueuesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetListDeadLetterSourceQueuesRequest struct {
    PathParams GetListDeadLetterSourceQueuesPathParams 
    QueryParams GetListDeadLetterSourceQueuesQueryParams 
    Headers GetListDeadLetterSourceQueuesHeaders 
    
}

type GetListDeadLetterSourceQueuesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

