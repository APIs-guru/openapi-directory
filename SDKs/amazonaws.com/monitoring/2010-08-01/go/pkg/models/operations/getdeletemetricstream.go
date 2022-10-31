package operations

type GetDeleteMetricStreamActionEnum string

const (
	GetDeleteMetricStreamActionEnumDeleteMetricStream GetDeleteMetricStreamActionEnum = "DeleteMetricStream"
)

type GetDeleteMetricStreamVersionEnum string

const (
	GetDeleteMetricStreamVersionEnumTwoThousandAndTen0801 GetDeleteMetricStreamVersionEnum = "2010-08-01"
)

type GetDeleteMetricStreamQueryParams struct {
	Action  GetDeleteMetricStreamActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Name    string                           `queryParam:"style=form,explode=true,name=Name"`
	Version GetDeleteMetricStreamVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteMetricStreamHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteMetricStreamRequest struct {
	QueryParams GetDeleteMetricStreamQueryParams
	Headers     GetDeleteMetricStreamHeaders
}

type GetDeleteMetricStreamResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
