package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSimulationApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateSimulationApplicationRequestBodyEnvironment struct {
	URI *string `json:"uri"`
}

type CreateSimulationApplicationRequestBodyRenderingEngine struct {
	Name    *shared.RenderingEngineTypeEnum `json:"name"`
	Version *string                         `json:"version"`
}

type CreateSimulationApplicationRequestBodyRobotSoftwareSuite struct {
	Name    *shared.RobotSoftwareSuiteTypeEnum        `json:"name"`
	Version *shared.RobotSoftwareSuiteVersionTypeEnum `json:"version"`
}

type CreateSimulationApplicationRequestBodySimulationSoftwareSuite struct {
	Name    *shared.SimulationSoftwareSuiteTypeEnum `json:"name"`
	Version *string                                 `json:"version"`
}

type CreateSimulationApplicationRequestBody struct {
	Environment             *CreateSimulationApplicationRequestBodyEnvironment            `json:"environment"`
	Name                    string                                                        `json:"name"`
	RenderingEngine         *CreateSimulationApplicationRequestBodyRenderingEngine        `json:"renderingEngine"`
	RobotSoftwareSuite      CreateSimulationApplicationRequestBodyRobotSoftwareSuite      `json:"robotSoftwareSuite"`
	SimulationSoftwareSuite CreateSimulationApplicationRequestBodySimulationSoftwareSuite `json:"simulationSoftwareSuite"`
	Sources                 []shared.SourceConfig                                         `json:"sources"`
	Tags                    map[string]string                                             `json:"tags"`
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
