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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
