package operations

type EnterpriseAdminPingGlobalWebhookPathParams struct {
	HookID int64 `pathParam:"style=simple,explode=false,name=hook_id"`
}

type EnterpriseAdminPingGlobalWebhookHeaders struct {
	Accept string `header:"name=accept"`
}

type EnterpriseAdminPingGlobalWebhookRequest struct {
	PathParams EnterpriseAdminPingGlobalWebhookPathParams
	Headers    EnterpriseAdminPingGlobalWebhookHeaders
}

type EnterpriseAdminPingGlobalWebhookResponse struct {
	ContentType string
	StatusCode  int64
}
