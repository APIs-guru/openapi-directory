package operations

type GetListMetricStreamsActionEnum string

const (
	GetListMetricStreamsActionEnumListMetricStreams GetListMetricStreamsActionEnum = "ListMetricStreams"
)

type GetListMetricStreamsVersionEnum string

const (
	GetListMetricStreamsVersionEnumTwoThousandAndTen0801 GetListMetricStreamsVersionEnum = "2010-08-01"
)

type GetListMetricStreamsQueryParams struct {
	Action     GetListMetricStreamsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *int64                          `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                         `queryParam:"style=form,explode=true,name=NextToken"`
	Version    GetListMetricStreamsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListMetricStreamsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetListMetricStreamsRequest struct {
	QueryParams GetListMetricStreamsQueryParams
	Headers     GetListMetricStreamsHeaders
}

type GetListMetricStreamsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
