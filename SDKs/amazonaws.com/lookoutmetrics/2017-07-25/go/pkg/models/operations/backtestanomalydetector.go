package operations

type BackTestAnomalyDetectorHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
