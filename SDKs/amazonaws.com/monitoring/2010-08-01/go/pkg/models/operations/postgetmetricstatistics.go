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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
