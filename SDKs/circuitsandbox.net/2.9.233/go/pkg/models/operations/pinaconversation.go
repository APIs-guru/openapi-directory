package operations

import (
	"openapi/pkg/models/shared"
)

type PinAConversationPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type PinAConversationSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type PinAConversationRequest struct {
	PathParams PinAConversationPathParams
	Security   PinAConversationSecurity
}

type PinAConversationResponse struct {
	Body         []byte
	ContentType  string
	Conversation *interface{}
	StatusCode   int64
}
