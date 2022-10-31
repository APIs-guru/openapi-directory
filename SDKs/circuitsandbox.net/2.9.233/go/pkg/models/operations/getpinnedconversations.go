package operations

import (
	"openapi/pkg/models/shared"
)

type GetPinnedConversationsPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
}

type GetPinnedConversationsSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetPinnedConversationsRequest struct {
	PathParams GetPinnedConversationsPathParams
	Security   GetPinnedConversationsSecurity
}

type GetPinnedConversationsResponse struct {
	Body         []byte
	ContentType  string
	PinnedTopics []interface{}
	StatusCode   int64
}
