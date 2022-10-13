package operations

type CreateWebhookQueryParams struct {
	Workspace *string `queryParam:"style=form,explode=true,name=workspace"`
}

type CreateWebhookRequestBodyWebhook struct {
	Collection *string `json:"collection"`
	Name       *string `json:"name"`
}

type CreateWebhookRequestBody struct {
	Webhook *CreateWebhookRequestBodyWebhook `json:"webhook"`
}

type CreateWebhookRequest struct {
	QueryParams CreateWebhookQueryParams
	Request     *CreateWebhookRequestBody `request:"mediaType=application/json"`
}

type CreateWebhookResponse struct {
	ContentType string
	StatusCode  int64
}
