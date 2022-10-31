package operations




type PostDescribeDataSharesForConsumerActionEnum string

const (
    PostDescribeDataSharesForConsumerActionEnumDescribeDataSharesForConsumer PostDescribeDataSharesForConsumerActionEnum = "DescribeDataSharesForConsumer"
)



type PostDescribeDataSharesForConsumerVersionEnum string

const (
    PostDescribeDataSharesForConsumerVersionEnumTwoThousandAndTwelve1201 PostDescribeDataSharesForConsumerVersionEnum = "2012-12-01"
)


type PostDescribeDataSharesForConsumerQueryParams struct {
    Action PostDescribeDataSharesForConsumerActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeDataSharesForConsumerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeDataSharesForConsumerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeDataSharesForConsumerRequest struct {
    QueryParams PostDescribeDataSharesForConsumerQueryParams 
    Headers PostDescribeDataSharesForConsumerHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeDataSharesForConsumerResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

