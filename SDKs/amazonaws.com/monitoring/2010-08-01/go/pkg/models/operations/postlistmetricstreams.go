package operations




type PostListMetricStreamsActionEnum string

const (
    PostListMetricStreamsActionEnumListMetricStreams PostListMetricStreamsActionEnum = "ListMetricStreams"
)



type PostListMetricStreamsVersionEnum string

const (
    PostListMetricStreamsVersionEnumTwoThousandAndTen0801 PostListMetricStreamsVersionEnum = "2010-08-01"
)


type PostListMetricStreamsQueryParams struct {
    Action PostListMetricStreamsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostListMetricStreamsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostListMetricStreamsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostListMetricStreamsRequest struct {
    QueryParams PostListMetricStreamsQueryParams 
    Headers PostListMetricStreamsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostListMetricStreamsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

