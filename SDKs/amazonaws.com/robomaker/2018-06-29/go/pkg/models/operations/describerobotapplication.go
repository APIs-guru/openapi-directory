package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRobotApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeRobotApplicationRequestBody struct {
	Application        string  `json:"application"`
	ApplicationVersion *string `json:"applicationVersion,omitempty"`
}

type DescribeRobotApplicationRequest struct {
	Headers DescribeRobotApplicationHeaders
	Request DescribeRobotApplicationRequestBody `request:"mediaType=application/json"`
}

type DescribeRobotApplicationResponse struct {
	ContentType                      string
	DescribeRobotApplicationResponse *shared.DescribeRobotApplicationResponse
	InternalServerException          *interface{}
	InvalidParameterException        *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
}
