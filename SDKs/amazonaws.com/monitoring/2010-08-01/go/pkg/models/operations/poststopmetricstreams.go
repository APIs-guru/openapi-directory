package operations

type PostStopMetricStreamsActionEnum string

const (
	PostStopMetricStreamsActionEnumStopMetricStreams PostStopMetricStreamsActionEnum = "StopMetricStreams"
)

type PostStopMetricStreamsVersionEnum string

const (
	PostStopMetricStreamsVersionEnumTwoThousandAndTen0801 PostStopMetricStreamsVersionEnum = "2010-08-01"
)

type PostStopMetricStreamsQueryParams struct {
	Action  PostStopMetricStreamsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostStopMetricStreamsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostStopMetricStreamsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostStopMetricStreamsRequest struct {
	QueryParams PostStopMetricStreamsQueryParams
	Headers     PostStopMetricStreamsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostStopMetricStreamsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
