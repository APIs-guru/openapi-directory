package operations

type PostStartMetricStreamsActionEnum string

const (
	PostStartMetricStreamsActionEnumStartMetricStreams PostStartMetricStreamsActionEnum = "StartMetricStreams"
)

type PostStartMetricStreamsVersionEnum string

const (
	PostStartMetricStreamsVersionEnumTwoThousandAndTen0801 PostStartMetricStreamsVersionEnum = "2010-08-01"
)

type PostStartMetricStreamsQueryParams struct {
	Action  PostStartMetricStreamsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostStartMetricStreamsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostStartMetricStreamsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostStartMetricStreamsRequest struct {
	QueryParams PostStartMetricStreamsQueryParams
	Headers     PostStartMetricStreamsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostStartMetricStreamsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
