package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRobotApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeRobotApplicationRequestBody struct {
	Application        string  `json:"application"`
	ApplicationVersion *string `json:"applicationVersion"`
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
