package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminGetPreReceiveHookPathParams struct {
	PreReceiveHookID int64 `pathParam:"style=simple,explode=false,name=pre_receive_hook_id"`
}

type EnterpriseAdminGetPreReceiveHookRequest struct {
	PathParams EnterpriseAdminGetPreReceiveHookPathParams
}

type EnterpriseAdminGetPreReceiveHookResponse struct {
	ContentType    string
	StatusCode     int64
	PreReceiveHook *shared.PreReceiveHook
}
