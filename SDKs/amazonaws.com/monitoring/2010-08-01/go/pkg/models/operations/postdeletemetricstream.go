package operations




type PostDeleteMetricStreamActionEnum string

const (
    PostDeleteMetricStreamActionEnumDeleteMetricStream PostDeleteMetricStreamActionEnum = "DeleteMetricStream"
)



type PostDeleteMetricStreamVersionEnum string

const (
    PostDeleteMetricStreamVersionEnumTwoThousandAndTen0801 PostDeleteMetricStreamVersionEnum = "2010-08-01"
)


type PostDeleteMetricStreamQueryParams struct {
    Action PostDeleteMetricStreamActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteMetricStreamVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteMetricStreamHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteMetricStreamRequest struct {
    QueryParams PostDeleteMetricStreamQueryParams 
    Headers PostDeleteMetricStreamHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteMetricStreamResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

