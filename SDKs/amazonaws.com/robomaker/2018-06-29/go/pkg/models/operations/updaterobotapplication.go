package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRobotApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateRobotApplicationRequestBodyEnvironment struct {
	URI *string `json:"uri"`
}

type UpdateRobotApplicationRequestBodyRobotSoftwareSuite struct {
	Name    *shared.RobotSoftwareSuiteTypeEnum        `json:"name"`
	Version *shared.RobotSoftwareSuiteVersionTypeEnum `json:"version"`
}

type UpdateRobotApplicationRequestBody struct {
	Application        string                                              `json:"application"`
	CurrentRevisionID  *string                                             `json:"currentRevisionId"`
	Environment        *UpdateRobotApplicationRequestBodyEnvironment       `json:"environment"`
	RobotSoftwareSuite UpdateRobotApplicationRequestBodyRobotSoftwareSuite `json:"robotSoftwareSuite"`
	Sources            []shared.SourceConfig                               `json:"sources"`
}

type UpdateRobotApplicationRequest struct {
	Headers UpdateRobotApplicationHeaders
	Request UpdateRobotApplicationRequestBody `request:"mediaType=application/json"`
}

type UpdateRobotApplicationResponse struct {
	ContentType                    string
	InternalServerException        *interface{}
	InvalidParameterException      *interface{}
	LimitExceededException         *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	UpdateRobotApplicationResponse *shared.UpdateRobotApplicationResponse
}
