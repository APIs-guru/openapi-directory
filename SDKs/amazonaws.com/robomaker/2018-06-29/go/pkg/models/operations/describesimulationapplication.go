package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSimulationApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeSimulationApplicationRequestBody struct {
	Application        string  `json:"application"`
	ApplicationVersion *string `json:"applicationVersion"`
}

type DescribeSimulationApplicationRequest struct {
	Headers DescribeSimulationApplicationHeaders
	Request DescribeSimulationApplicationRequestBody `request:"mediaType=application/json"`
}

type DescribeSimulationApplicationResponse struct {
	ContentType                           string
	DescribeSimulationApplicationResponse *shared.DescribeSimulationApplicationResponse
	InternalServerException               *interface{}
	InvalidParameterException             *interface{}
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
	ThrottlingException                   *interface{}
}
