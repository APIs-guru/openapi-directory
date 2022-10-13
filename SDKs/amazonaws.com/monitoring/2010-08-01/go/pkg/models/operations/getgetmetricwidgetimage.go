package operations

type GetGetMetricWidgetImageActionEnum string

const (
	GetGetMetricWidgetImageActionEnumGetMetricWidgetImage GetGetMetricWidgetImageActionEnum = "GetMetricWidgetImage"
)

type GetGetMetricWidgetImageVersionEnum string

const (
	GetGetMetricWidgetImageVersionEnumTwoThousandAndTen0801 GetGetMetricWidgetImageVersionEnum = "2010-08-01"
)

type GetGetMetricWidgetImageQueryParams struct {
	Action       GetGetMetricWidgetImageActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MetricWidget string                             `queryParam:"style=form,explode=true,name=MetricWidget"`
	OutputFormat *string                            `queryParam:"style=form,explode=true,name=OutputFormat"`
	Version      GetGetMetricWidgetImageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetMetricWidgetImageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetMetricWidgetImageRequest struct {
	QueryParams GetGetMetricWidgetImageQueryParams
	Headers     GetGetMetricWidgetImageHeaders
}

type GetGetMetricWidgetImageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
