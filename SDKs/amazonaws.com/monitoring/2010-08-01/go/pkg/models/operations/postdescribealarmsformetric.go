package operations

type PostDescribeAlarmsForMetricActionEnum string

const (
	PostDescribeAlarmsForMetricActionEnumDescribeAlarmsForMetric PostDescribeAlarmsForMetricActionEnum = "DescribeAlarmsForMetric"
)

type PostDescribeAlarmsForMetricVersionEnum string

const (
	PostDescribeAlarmsForMetricVersionEnumTwoThousandAndTen0801 PostDescribeAlarmsForMetricVersionEnum = "2010-08-01"
)

type PostDescribeAlarmsForMetricQueryParams struct {
	Action  PostDescribeAlarmsForMetricActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeAlarmsForMetricVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeAlarmsForMetricHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeAlarmsForMetricRequest struct {
	QueryParams PostDescribeAlarmsForMetricQueryParams
	Headers     PostDescribeAlarmsForMetricHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeAlarmsForMetricResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
