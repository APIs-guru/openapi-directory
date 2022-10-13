package operations

type PostDescribeAnomalyDetectorsActionEnum string

const (
	PostDescribeAnomalyDetectorsActionEnumDescribeAnomalyDetectors PostDescribeAnomalyDetectorsActionEnum = "DescribeAnomalyDetectors"
)

type PostDescribeAnomalyDetectorsVersionEnum string

const (
	PostDescribeAnomalyDetectorsVersionEnumTwoThousandAndTen0801 PostDescribeAnomalyDetectorsVersionEnum = "2010-08-01"
)

type PostDescribeAnomalyDetectorsQueryParams struct {
	Action  PostDescribeAnomalyDetectorsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeAnomalyDetectorsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeAnomalyDetectorsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeAnomalyDetectorsRequest struct {
	QueryParams PostDescribeAnomalyDetectorsQueryParams
	Headers     PostDescribeAnomalyDetectorsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeAnomalyDetectorsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
