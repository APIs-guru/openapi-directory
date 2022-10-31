package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolTftpGetTracePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolTftpGetTraceRequest struct {
	PathParams ProtocolTftpGetTracePathParams
}

type ProtocolTftpGetTraceResponse struct {
	ConfigTftp  *shared.ConfigTftp
	ContentType string
	StatusCode  int64
}
