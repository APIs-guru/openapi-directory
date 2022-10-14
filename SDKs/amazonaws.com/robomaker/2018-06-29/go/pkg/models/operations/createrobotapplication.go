package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRobotApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateRobotApplicationRequestBodyEnvironment struct {
	URI *string `json:"uri,omitempty"`
}

type CreateRobotApplicationRequestBodyRobotSoftwareSuite struct {
	Name    *shared.RobotSoftwareSuiteTypeEnum        `json:"name,omitempty"`
	Version *shared.RobotSoftwareSuiteVersionTypeEnum `json:"version,omitempty"`
}

type CreateRobotApplicationRequestBody struct {
	Environment        *CreateRobotApplicationRequestBodyEnvironment       `json:"environment,omitempty"`
	Name               string                                              `json:"name"`
	RobotSoftwareSuite CreateRobotApplicationRequestBodyRobotSoftwareSuite `json:"robotSoftwareSuite"`
	Sources            []shared.SourceConfig                               `json:"sources,omitempty"`
	Tags               map[string]string                                   `json:"tags,omitempty"`
}

type CreateRobotApplicationRequest struct {
	Headers CreateRobotApplicationHeaders
	Request CreateRobotApplicationRequestBody `request:"mediaType=application/json"`
}

type CreateRobotApplicationResponse struct {
	ContentType                          string
	CreateRobotApplicationResponse       *shared.CreateRobotApplicationResponse
	IdempotentParameterMismatchException *interface{}
	InternalServerException              *interface{}
	InvalidParameterException            *interface{}
	LimitExceededException               *interface{}
	ResourceAlreadyExistsException       *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
}
