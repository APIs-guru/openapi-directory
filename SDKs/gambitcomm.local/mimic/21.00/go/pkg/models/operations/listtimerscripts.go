package operations

import (
	"openapi/pkg/models/shared"
)

type ListTimerScriptsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ListTimerScriptsRequest struct {
	PathParams ListTimerScriptsPathParams
}

type ListTimerScriptsResponse struct {
	ContentType  string
	StatusCode   int64
	TimerScripts []shared.TimerScript
}
