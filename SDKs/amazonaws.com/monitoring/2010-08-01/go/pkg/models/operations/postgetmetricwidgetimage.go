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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
