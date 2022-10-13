package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSimulationJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeSimulationJobRequestBody struct {
	Job string `json:"job"`
}

type DescribeSimulationJobRequest struct {
	Headers DescribeSimulationJobHeaders
	Request DescribeSimulationJobRequestBody `request:"mediaType=application/json"`
}

type DescribeSimulationJobResponse struct {
	ContentType                   string
	DescribeSimulationJobResponse *shared.DescribeSimulationJobResponse
	InternalServerException       *interface{}
	InvalidParameterException     *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
