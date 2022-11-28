package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSimulationApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateSimulationApplicationRequestBodyEnvironment
// The object that contains the Docker image URI for either your robot or simulation applications.
type CreateSimulationApplicationRequestBodyEnvironment struct {
	URI *string `json:"uri,omitempty"`
}

// CreateSimulationApplicationRequestBodyRenderingEngine
// Information about a rendering engine.
type CreateSimulationApplicationRequestBodyRenderingEngine struct {
	Name    *shared.RenderingEngineTypeEnum `json:"name,omitempty"`
	Version *string                         `json:"version,omitempty"`
}

// CreateSimulationApplicationRequestBodyRobotSoftwareSuite
// Information about a robot software suite (ROS distribution).
type CreateSimulationApplicationRequestBodyRobotSoftwareSuite struct {
	Name    *shared.RobotSoftwareSuiteTypeEnum        `json:"name,omitempty"`
	Version *shared.RobotSoftwareSuiteVersionTypeEnum `json:"version,omitempty"`
}

// CreateSimulationApplicationRequestBodySimulationSoftwareSuite
// Information about a simulation software suite.
type CreateSimulationApplicationRequestBodySimulationSoftwareSuite struct {
	Name    *shared.SimulationSoftwareSuiteTypeEnum `json:"name,omitempty"`
	Version *string                                 `json:"version,omitempty"`
}

type CreateSimulationApplicationRequestBody struct {
	Environment             *CreateSimulationApplicationRequestBodyEnvironment            `json:"environment,omitempty"`
	Name                    string                                                        `json:"name"`
	RenderingEngine         *CreateSimulationApplicationRequestBodyRenderingEngine        `json:"renderingEngine,omitempty"`
	RobotSoftwareSuite      CreateSimulationApplicationRequestBodyRobotSoftwareSuite      `json:"robotSoftwareSuite"`
	SimulationSoftwareSuite CreateSimulationApplicationRequestBodySimulationSoftwareSuite `json:"simulationSoftwareSuite"`
	Sources                 []shared.SourceConfig                                         `json:"sources,omitempty"`
	Tags                    map[string]string                                             `json:"tags,omitempty"`
}

type CreateSimulationApplicationRequest struct {
	Headers CreateSimulationApplicationHeaders
	Request CreateSimulationApplicationRequestBody `request:"mediaType=application/json"`
}

type CreateSimulationApplicationResponse struct {
	ContentType                          string
	CreateSimulationApplicationResponse  *shared.CreateSimulationApplicationResponse
	IdempotentParameterMismatchException *interface{}
	InternalServerException              *interface{}
	InvalidParameterException            *interface{}
	LimitExceededException               *interface{}
	ResourceAlreadyExistsException       *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
}
