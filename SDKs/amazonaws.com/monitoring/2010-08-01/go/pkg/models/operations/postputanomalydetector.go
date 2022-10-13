package operations

type PostPutAnomalyDetectorActionEnum string

const (
	PostPutAnomalyDetectorActionEnumPutAnomalyDetector PostPutAnomalyDetectorActionEnum = "PutAnomalyDetector"
)

type PostPutAnomalyDetectorVersionEnum string

const (
	PostPutAnomalyDetectorVersionEnumTwoThousandAndTen0801 PostPutAnomalyDetectorVersionEnum = "2010-08-01"
)

type PostPutAnomalyDetectorQueryParams struct {
	Action  PostPutAnomalyDetectorActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPutAnomalyDetectorVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPutAnomalyDetectorHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostPutAnomalyDetectorRequest struct {
	QueryParams PostPutAnomalyDetectorQueryParams
	Headers     PostPutAnomalyDetectorHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPutAnomalyDetectorResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
