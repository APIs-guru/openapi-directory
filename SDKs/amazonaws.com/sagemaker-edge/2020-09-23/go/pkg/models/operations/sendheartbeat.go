package operations

import (
	"openapi/pkg/models/shared"
)

type SendHeartbeatHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SendHeartbeatRequestBody struct {
	AgentMetrics    []shared.EdgeMetric `json:"AgentMetrics,omitempty"`
	AgentVersion    string              `json:"AgentVersion"`
	DeviceFleetName string              `json:"DeviceFleetName"`
	DeviceName      string              `json:"DeviceName"`
	Models          []shared.Model      `json:"Models,omitempty"`
}

type SendHeartbeatRequest struct {
	Headers SendHeartbeatHeaders
	Request SendHeartbeatRequestBody `request:"mediaType=application/json"`
}

type SendHeartbeatResponse struct {
	ContentType              string
	InternalServiceException *interface{}
	StatusCode               int64
}
