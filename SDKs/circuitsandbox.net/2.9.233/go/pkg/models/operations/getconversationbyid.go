package operations

import (
	"openapi/pkg/models/shared"
)

type GetConversationbyIDPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
}

type GetConversationbyIDSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetConversationbyIDRequest struct {
	PathParams GetConversationbyIDPathParams
	Security   GetConversationbyIDSecurity
}

type GetConversationbyIDResponse struct {
	Body         []byte
	ContentType  string
	Conversation *interface{}
	StatusCode   int64
}
