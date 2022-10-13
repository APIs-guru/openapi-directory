package operations

import (
	"openapi/pkg/models/shared"
)

type NewPathParams struct {
	IP       string `pathParam:"style=simple,explode=false,name=IP"`
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
}

type NewRequest struct {
	PathParams NewPathParams
	Request    []shared.Triplet `request:"mediaType=application/json"`
}

type NewResponse struct {
	ContentType                 string
	StatusCode                  int64
	New200ApplicationJSONString *string
}
