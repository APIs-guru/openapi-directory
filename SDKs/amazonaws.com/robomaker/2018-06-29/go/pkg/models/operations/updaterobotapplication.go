package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRobotApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateRobotApplicationRequestBodyEnvironment
// The object that contains the Docker image URI for either your robot or simulation applications.
type UpdateRobotApplicationRequestBodyEnvironment struct {
	URI *string `json:"uri,omitempty"`
}

// UpdateRobotApplicationRequestBodyRobotSoftwareSuite
// Information about a robot software suite (ROS distribution).
type UpdateRobotApplicationRequestBodyRobotSoftwareSuite struct {
	Name    *shared.RobotSoftwareSuiteTypeEnum        `json:"name,omitempty"`
	Version *shared.RobotSoftwareSuiteVersionTypeEnum `json:"version,omitempty"`
}

type UpdateRobotApplicationRequestBody struct {
	Application        string                                              `json:"application"`
	CurrentRevisionID  *string                                             `json:"currentRevisionId,omitempty"`
	Environment        *UpdateRobotApplicationRequestBodyEnvironment       `json:"environment,omitempty"`
	RobotSoftwareSuite UpdateRobotApplicationRequestBodyRobotSoftwareSuite `json:"robotSoftwareSuite"`
	Sources            []shared.SourceConfig                               `json:"sources,omitempty"`
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
