package operations

type BackTestAnomalyDetectorHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type BackTestAnomalyDetectorRequestBody struct {
	AnomalyDetectorArn string `json:"AnomalyDetectorArn"`
}

type BackTestAnomalyDetectorRequest struct {
	Headers BackTestAnomalyDetectorHeaders
	Request BackTestAnomalyDetectorRequestBody `request:"mediaType=application/json"`
}

type BackTestAnomalyDetectorResponse struct {
	AccessDeniedException           *interface{}
	BackTestAnomalyDetectorResponse map[string]interface{}
	ContentType                     string
	InternalServerException         *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
	ValidationException             *interface{}
}
