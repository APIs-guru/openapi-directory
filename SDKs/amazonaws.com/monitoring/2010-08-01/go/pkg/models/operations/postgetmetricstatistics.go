package operations

type PostGetMetricStatisticsActionEnum string

const (
	PostGetMetricStatisticsActionEnumGetMetricStatistics PostGetMetricStatisticsActionEnum = "GetMetricStatistics"
)

type PostGetMetricStatisticsVersionEnum string

const (
	PostGetMetricStatisticsVersionEnumTwoThousandAndTen0801 PostGetMetricStatisticsVersionEnum = "2010-08-01"
)

type PostGetMetricStatisticsQueryParams struct {
	Action  PostGetMetricStatisticsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetMetricStatisticsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetMetricStatisticsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetMetricStatisticsRequest struct {
	QueryParams PostGetMetricStatisticsQueryParams
	Headers     PostGetMetricStatisticsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetMetricStatisticsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
