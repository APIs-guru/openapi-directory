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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
