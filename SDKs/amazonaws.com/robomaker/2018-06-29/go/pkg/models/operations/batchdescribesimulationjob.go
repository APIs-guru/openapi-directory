package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDescribeSimulationJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchDescribeSimulationJobRequestBody struct {
	Jobs []string `json:"jobs"`
}

type BatchDescribeSimulationJobRequest struct {
	Headers BatchDescribeSimulationJobHeaders
	Request BatchDescribeSimulationJobRequestBody `request:"mediaType=application/json"`
}

type BatchDescribeSimulationJobResponse struct {
	BatchDescribeSimulationJobResponse *shared.BatchDescribeSimulationJobResponse
	ContentType                        string
	InternalServerException            *interface{}
	InvalidParameterException          *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
}
