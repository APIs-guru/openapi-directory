package operations

type PostPutMetricStreamActionEnum string

const (
	PostPutMetricStreamActionEnumPutMetricStream PostPutMetricStreamActionEnum = "PutMetricStream"
)

type PostPutMetricStreamVersionEnum string

const (
	PostPutMetricStreamVersionEnumTwoThousandAndTen0801 PostPutMetricStreamVersionEnum = "2010-08-01"
)

type PostPutMetricStreamQueryParams struct {
	Action  PostPutMetricStreamActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPutMetricStreamVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPutMetricStreamHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostPutMetricStreamRequest struct {
	QueryParams PostPutMetricStreamQueryParams
	Headers     PostPutMetricStreamHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPutMetricStreamResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
