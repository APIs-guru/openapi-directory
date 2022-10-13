package operations

type EnterpriseAdminDeletePreReceiveHookPathParams struct {
	PreReceiveHookID int64 `pathParam:"style=simple,explode=false,name=pre_receive_hook_id"`
}

type EnterpriseAdminDeletePreReceiveHookRequest struct {
	PathParams EnterpriseAdminDeletePreReceiveHookPathParams
}

type EnterpriseAdminDeletePreReceiveHookResponse struct {
	ContentType string
	StatusCode  int64
}
