package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSimulationApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateSimulationApplicationRequestBodyEnvironment struct {
	URI *string `json:"uri"`
}

type UpdateSimulationApplicationRequestBodyRenderingEngine struct {
	Name    *shared.RenderingEngineTypeEnum `json:"name"`
	Version *string                         `json:"version"`
}

type UpdateSimulationApplicationRequestBodyRobotSoftwareSuite struct {
	Name    *shared.RobotSoftwareSuiteTypeEnum        `json:"name"`
	Version *shared.RobotSoftwareSuiteVersionTypeEnum `json:"version"`
}

type UpdateSimulationApplicationRequestBodySimulationSoftwareSuite struct {
	Name    *shared.SimulationSoftwareSuiteTypeEnum `json:"name"`
	Version *string                                 `json:"version"`
}

type UpdateSimulationApplicationRequestBody struct {
	Application             string                                                        `json:"application"`
	CurrentRevisionID       *string                                                       `json:"currentRevisionId"`
	Environment             *UpdateSimulationApplicationRequestBodyEnvironment            `json:"environment"`
	RenderingEngine         *UpdateSimulationApplicationRequestBodyRenderingEngine        `json:"renderingEngine"`
	RobotSoftwareSuite      UpdateSimulationApplicationRequestBodyRobotSoftwareSuite      `json:"robotSoftwareSuite"`
	SimulationSoftwareSuite UpdateSimulationApplicationRequestBodySimulationSoftwareSuite `json:"simulationSoftwareSuite"`
	Sources                 []shared.SourceConfig                                         `json:"sources"`
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
