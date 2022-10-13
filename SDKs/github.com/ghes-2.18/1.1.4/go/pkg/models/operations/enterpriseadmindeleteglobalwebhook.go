package operations

type EnterpriseAdminDeleteGlobalWebhookPathParams struct {
	HookID int64 `pathParam:"style=simple,explode=false,name=hook_id"`
}

type EnterpriseAdminDeleteGlobalWebhookHeaders struct {
	Accept string `header:"name=accept"`
}

type EnterpriseAdminDeleteGlobalWebhookRequest struct {
	PathParams EnterpriseAdminDeleteGlobalWebhookPathParams
	Headers    EnterpriseAdminDeleteGlobalWebhookHeaders
}

type EnterpriseAdminDeleteGlobalWebhookResponse struct {
	ContentType string
	StatusCode  int64
}
