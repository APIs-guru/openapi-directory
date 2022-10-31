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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
