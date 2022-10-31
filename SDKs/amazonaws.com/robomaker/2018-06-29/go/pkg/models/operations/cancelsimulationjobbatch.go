package operations

type CancelSimulationJobBatchHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
