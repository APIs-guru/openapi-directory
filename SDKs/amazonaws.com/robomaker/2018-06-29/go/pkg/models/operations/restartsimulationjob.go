package operations

type RestartSimulationJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RestartSimulationJobRequestBody struct {
	Job string `json:"job"`
}

type RestartSimulationJobRequest struct {
	Headers RestartSimulationJobHeaders
	Request RestartSimulationJobRequestBody `request:"mediaType=application/json"`
}

type RestartSimulationJobResponse struct {
	ContentType                  string
	InternalServerException      *interface{}
	InvalidParameterException    *interface{}
	LimitExceededException       *interface{}
	ResourceNotFoundException    *interface{}
	RestartSimulationJobResponse map[string]interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
}
