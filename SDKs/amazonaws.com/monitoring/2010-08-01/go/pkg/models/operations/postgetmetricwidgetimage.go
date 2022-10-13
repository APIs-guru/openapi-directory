package operations

type PostGetMetricWidgetImageActionEnum string

const (
	PostGetMetricWidgetImageActionEnumGetMetricWidgetImage PostGetMetricWidgetImageActionEnum = "GetMetricWidgetImage"
)

type PostGetMetricWidgetImageVersionEnum string

const (
	PostGetMetricWidgetImageVersionEnumTwoThousandAndTen0801 PostGetMetricWidgetImageVersionEnum = "2010-08-01"
)

type PostGetMetricWidgetImageQueryParams struct {
	Action  PostGetMetricWidgetImageActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetMetricWidgetImageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetMetricWidgetImageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetMetricWidgetImageRequest struct {
	QueryParams PostGetMetricWidgetImageQueryParams
	Headers     PostGetMetricWidgetImageHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetMetricWidgetImageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
