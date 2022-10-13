package operations

type PostDescribeDataSharesForProducerActionEnum string

const (
	PostDescribeDataSharesForProducerActionEnumDescribeDataSharesForProducer PostDescribeDataSharesForProducerActionEnum = "DescribeDataSharesForProducer"
)

type PostDescribeDataSharesForProducerVersionEnum string

const (
	PostDescribeDataSharesForProducerVersionEnumTwoThousandAndTwelve1201 PostDescribeDataSharesForProducerVersionEnum = "2012-12-01"
)

type PostDescribeDataSharesForProducerQueryParams struct {
	Action  PostDescribeDataSharesForProducerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeDataSharesForProducerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDataSharesForProducerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeDataSharesForProducerRequest struct {
	QueryParams PostDescribeDataSharesForProducerQueryParams
	Headers     PostDescribeDataSharesForProducerHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDataSharesForProducerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
