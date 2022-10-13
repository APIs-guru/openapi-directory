package operations

type CancelSimulationJobBatchHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CancelSimulationJobBatchRequestBody struct {
	Batch string `json:"batch"`
}

type CancelSimulationJobBatchRequest struct {
	Headers CancelSimulationJobBatchHeaders
	Request CancelSimulationJobBatchRequestBody `request:"mediaType=application/json"`
}

type CancelSimulationJobBatchResponse struct {
	CancelSimulationJobBatchResponse map[string]interface{}
	ContentType                      string
	InternalServerException          *interface{}
	InvalidParameterException        *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
}
