package operations

type PostDeleteAnomalyDetectorActionEnum string

const (
	PostDeleteAnomalyDetectorActionEnumDeleteAnomalyDetector PostDeleteAnomalyDetectorActionEnum = "DeleteAnomalyDetector"
)

type PostDeleteAnomalyDetectorVersionEnum string

const (
	PostDeleteAnomalyDetectorVersionEnumTwoThousandAndTen0801 PostDeleteAnomalyDetectorVersionEnum = "2010-08-01"
)

type PostDeleteAnomalyDetectorQueryParams struct {
	Action  PostDeleteAnomalyDetectorActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteAnomalyDetectorVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteAnomalyDetectorHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteAnomalyDetectorRequest struct {
	QueryParams PostDeleteAnomalyDetectorQueryParams
	Headers     PostDeleteAnomalyDetectorHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteAnomalyDetectorResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
