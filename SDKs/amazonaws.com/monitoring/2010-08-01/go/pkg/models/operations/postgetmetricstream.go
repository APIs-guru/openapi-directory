package operations

type PostGetMetricStreamActionEnum string

const (
	PostGetMetricStreamActionEnumGetMetricStream PostGetMetricStreamActionEnum = "GetMetricStream"
)

type PostGetMetricStreamVersionEnum string

const (
	PostGetMetricStreamVersionEnumTwoThousandAndTen0801 PostGetMetricStreamVersionEnum = "2010-08-01"
)

type PostGetMetricStreamQueryParams struct {
	Action  PostGetMetricStreamActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetMetricStreamVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetMetricStreamHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetMetricStreamRequest struct {
	QueryParams PostGetMetricStreamQueryParams
	Headers     PostGetMetricStreamHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetMetricStreamResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
