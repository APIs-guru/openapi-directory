package operations

type DeleteAnomalyDetectorHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteAnomalyDetectorRequestBody struct {
	AnomalyDetectorArn string `json:"AnomalyDetectorArn"`
}

type DeleteAnomalyDetectorRequest struct {
	Headers DeleteAnomalyDetectorHeaders
	Request DeleteAnomalyDetectorRequestBody `request:"mediaType=application/json"`
}

type DeleteAnomalyDetectorResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	DeleteAnomalyDetectorResponse map[string]interface{}
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	TooManyRequestsException      *interface{}
	ValidationException           *interface{}
}
