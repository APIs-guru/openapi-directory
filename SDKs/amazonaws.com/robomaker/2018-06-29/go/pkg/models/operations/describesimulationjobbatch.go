package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSimulationJobBatchHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeSimulationJobBatchRequestBody struct {
	Batch string `json:"batch"`
}

type DescribeSimulationJobBatchRequest struct {
	Headers DescribeSimulationJobBatchHeaders
	Request DescribeSimulationJobBatchRequestBody `request:"mediaType=application/json"`
}

type DescribeSimulationJobBatchResponse struct {
	ContentType                        string
	DescribeSimulationJobBatchResponse *shared.DescribeSimulationJobBatchResponse
	InternalServerException            *interface{}
	InvalidParameterException          *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
}
