package operations

import (
	"openapi/pkg/models/shared"
)

type StartSimulationJobBatchHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartSimulationJobBatchRequestBodyBatchPolicy struct {
	MaxConcurrency   *int64 `json:"maxConcurrency"`
	TimeoutInSeconds *int64 `json:"timeoutInSeconds"`
}

type StartSimulationJobBatchRequestBody struct {
	BatchPolicy                 *StartSimulationJobBatchRequestBodyBatchPolicy `json:"batchPolicy"`
	ClientRequestToken          *string                                        `json:"clientRequestToken"`
	CreateSimulationJobRequests []shared.SimulationJobRequest                  `json:"createSimulationJobRequests"`
	Tags                        map[string]string                              `json:"tags"`
}

type StartSimulationJobBatchRequest struct {
	Headers StartSimulationJobBatchHeaders
	Request StartSimulationJobBatchRequestBody `request:"mediaType=application/json"`
}

type StartSimulationJobBatchResponse struct {
	ContentType                          string
	IdempotentParameterMismatchException *interface{}
	InternalServerException              *interface{}
	InvalidParameterException            *interface{}
	LimitExceededException               *interface{}
	StartSimulationJobBatchResponse      *shared.StartSimulationJobBatchResponse
	StatusCode                           int64
	ThrottlingException                  *interface{}
}
