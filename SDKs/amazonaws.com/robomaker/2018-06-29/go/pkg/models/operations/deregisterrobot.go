package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterRobotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeregisterRobotRequestBody struct {
	Fleet string `json:"fleet"`
	Robot string `json:"robot"`
}

type DeregisterRobotRequest struct {
	Headers DeregisterRobotHeaders
	Request DeregisterRobotRequestBody `request:"mediaType=application/json"`
}

type DeregisterRobotResponse struct {
	ContentType               string
	DeregisterRobotResponse   *shared.DeregisterRobotResponse
	InternalServerException   *interface{}
	InvalidParameterException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
