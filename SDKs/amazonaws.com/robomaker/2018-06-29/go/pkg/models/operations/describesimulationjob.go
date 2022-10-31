package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSimulationJobHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
