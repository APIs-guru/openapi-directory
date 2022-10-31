package operations

import (
	"openapi/pkg/models/shared"
)

type ListDaemonTimerScriptsResponse struct {
	ContentType  string
	StatusCode   int64
	TimerScripts []shared.TimerScript
}
