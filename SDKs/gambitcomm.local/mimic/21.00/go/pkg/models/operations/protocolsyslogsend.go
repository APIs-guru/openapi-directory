package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolSyslogSendPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
	Pri      int32 `pathParam:"style=simple,explode=false,name=pri"`
}

type ProtocolSyslogSendRequest struct {
	PathParams ProtocolSyslogSendPathParams
	Request    shared.SyslogMsg `request:"mediaType=application/json"`
}

type ProtocolSyslogSendResponse struct {
	ContentType                                string
	StatusCode                                 int64
	ProtocolSyslogSend200ApplicationJSONString *string
}
