package operations

import (
	"openapi/pkg/models/shared"
)

type SetMibsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type SetMibsRequest struct {
	PathParams SetMibsPathParams
	Request    []shared.Triplet `request:"mediaType=application/json"`
}

type SetMibsResponse struct {
	ContentType                     string
	StatusCode                      int64
	SetMibs200ApplicationJSONString *string
}
