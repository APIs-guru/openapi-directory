package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSimulationApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeSimulationApplicationRequestBody struct {
	Application        string  `json:"application"`
	ApplicationVersion *string `json:"applicationVersion,omitempty"`
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
