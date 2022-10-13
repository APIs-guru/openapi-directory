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
	Action  PostDescribeDataSharesForConsumerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeDataSharesForConsumerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDataSharesForConsumerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeDataSharesForConsumerRequest struct {
	QueryParams PostDescribeDataSharesForConsumerQueryParams
	Headers     PostDescribeDataSharesForConsumerHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDataSharesForConsumerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
