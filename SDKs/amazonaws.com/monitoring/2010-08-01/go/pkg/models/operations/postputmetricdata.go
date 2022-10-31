package operations

type PostPutMetricDataActionEnum string

const (
	PostPutMetricDataActionEnumPutMetricData PostPutMetricDataActionEnum = "PutMetricData"
)

type PostPutMetricDataVersionEnum string

const (
	PostPutMetricDataVersionEnumTwoThousandAndTen0801 PostPutMetricDataVersionEnum = "2010-08-01"
)

type PostPutMetricDataQueryParams struct {
	Action  PostPutMetricDataActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPutMetricDataVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPutMetricDataHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostPutMetricDataRequest struct {
	QueryParams PostPutMetricDataQueryParams
	Headers     PostPutMetricDataHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPutMetricDataResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
