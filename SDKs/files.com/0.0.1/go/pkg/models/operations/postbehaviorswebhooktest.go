package operations

import (
	"openapi/pkg/models/shared"
)

type PostBehaviorsWebhookTestRequestBody struct {
	Action   *string                `multipartForm:"name=action"`
	Body     map[string]interface{} `multipartForm:"name=body,json"`
	Encoding *string                `multipartForm:"name=encoding"`
	Headers  map[string]interface{} `multipartForm:"name=headers,json"`
	Method   *string                `multipartForm:"name=method"`
	URL      string                 `multipartForm:"name=url"`
}

type PostBehaviorsWebhookTestRequest struct {
	Request PostBehaviorsWebhookTestRequestBody `request:"mediaType=multipart/form-data"`
}

type PostBehaviorsWebhookTestResponse struct {
	ContentType  string
	StatusCode   int64
	StatusEntity *shared.StatusEntity
}
