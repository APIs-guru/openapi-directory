package operations

type GetStartMetricStreamsActionEnum string

const (
	GetStartMetricStreamsActionEnumStartMetricStreams GetStartMetricStreamsActionEnum = "StartMetricStreams"
)

type GetStartMetricStreamsVersionEnum string

const (
	GetStartMetricStreamsVersionEnumTwoThousandAndTen0801 GetStartMetricStreamsVersionEnum = "2010-08-01"
)

type GetStartMetricStreamsQueryParams struct {
	Action  GetStartMetricStreamsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Names   []string                         `queryParam:"style=form,explode=true,name=Names"`
	Version GetStartMetricStreamsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetStartMetricStreamsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetStartMetricStreamsRequest struct {
	QueryParams GetStartMetricStreamsQueryParams
	Headers     GetStartMetricStreamsHeaders
}

type GetStartMetricStreamsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
