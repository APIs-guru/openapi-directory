package operations

type GetStopMetricStreamsActionEnum string

const (
	GetStopMetricStreamsActionEnumStopMetricStreams GetStopMetricStreamsActionEnum = "StopMetricStreams"
)

type GetStopMetricStreamsVersionEnum string

const (
	GetStopMetricStreamsVersionEnumTwoThousandAndTen0801 GetStopMetricStreamsVersionEnum = "2010-08-01"
)

type GetStopMetricStreamsQueryParams struct {
	Action  GetStopMetricStreamsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Names   []string                        `queryParam:"style=form,explode=true,name=Names"`
	Version GetStopMetricStreamsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetStopMetricStreamsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetStopMetricStreamsRequest struct {
	QueryParams GetStopMetricStreamsQueryParams
	Headers     GetStopMetricStreamsHeaders
}

type GetStopMetricStreamsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
