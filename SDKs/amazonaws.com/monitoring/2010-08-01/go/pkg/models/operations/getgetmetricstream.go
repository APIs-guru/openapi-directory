package operations

type GetGetMetricStreamActionEnum string

const (
	GetGetMetricStreamActionEnumGetMetricStream GetGetMetricStreamActionEnum = "GetMetricStream"
)

type GetGetMetricStreamVersionEnum string

const (
	GetGetMetricStreamVersionEnumTwoThousandAndTen0801 GetGetMetricStreamVersionEnum = "2010-08-01"
)

type GetGetMetricStreamQueryParams struct {
	Action  GetGetMetricStreamActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Name    string                        `queryParam:"style=form,explode=true,name=Name"`
	Version GetGetMetricStreamVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetMetricStreamHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetMetricStreamRequest struct {
	QueryParams GetGetMetricStreamQueryParams
	Headers     GetGetMetricStreamHeaders
}

type GetGetMetricStreamResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
