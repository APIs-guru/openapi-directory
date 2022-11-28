package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSimulationApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateSimulationApplicationRequestBodyEnvironment
// The object that contains the Docker image URI for either your robot or simulation applications.
type UpdateSimulationApplicationRequestBodyEnvironment struct {
	URI *string `json:"uri,omitempty"`
}

// UpdateSimulationApplicationRequestBodyRenderingEngine
// Information about a rendering engine.
type UpdateSimulationApplicationRequestBodyRenderingEngine struct {
	Name    *shared.RenderingEngineTypeEnum `json:"name,omitempty"`
	Version *string                         `json:"version,omitempty"`
}

// UpdateSimulationApplicationRequestBodyRobotSoftwareSuite
// Information about a robot software suite (ROS distribution).
type UpdateSimulationApplicationRequestBodyRobotSoftwareSuite struct {
	Name    *shared.RobotSoftwareSuiteTypeEnum        `json:"name,omitempty"`
	Version *shared.RobotSoftwareSuiteVersionTypeEnum `json:"version,omitempty"`
}

// UpdateSimulationApplicationRequestBodySimulationSoftwareSuite
// Information about a simulation software suite.
type UpdateSimulationApplicationRequestBodySimulationSoftwareSuite struct {
	Name    *shared.SimulationSoftwareSuiteTypeEnum `json:"name,omitempty"`
	Version *string                                 `json:"version,omitempty"`
}

type UpdateSimulationApplicationRequestBody struct {
	Application             string                                                        `json:"application"`
	CurrentRevisionID       *string                                                       `json:"currentRevisionId,omitempty"`
	Environment             *UpdateSimulationApplicationRequestBodyEnvironment            `json:"environment,omitempty"`
	RenderingEngine         *UpdateSimulationApplicationRequestBodyRenderingEngine        `json:"renderingEngine,omitempty"`
	RobotSoftwareSuite      UpdateSimulationApplicationRequestBodyRobotSoftwareSuite      `json:"robotSoftwareSuite"`
	SimulationSoftwareSuite UpdateSimulationApplicationRequestBodySimulationSoftwareSuite `json:"simulationSoftwareSuite"`
	Sources                 []shared.SourceConfig                                         `json:"sources,omitempty"`
}

type UpdateSimulationApplicationRequest struct {
	Headers UpdateSimulationApplicationHeaders
	Request UpdateSimulationApplicationRequestBody `request:"mediaType=application/json"`
}

type UpdateSimulationApplicationResponse struct {
	ContentType                         string
	InternalServerException             *interface{}
	InvalidParameterException           *interface{}
	LimitExceededException              *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
	ThrottlingException                 *interface{}
	UpdateSimulationApplicationResponse *shared.UpdateSimulationApplicationResponse
}
