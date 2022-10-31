package operations

import (
	"openapi/pkg/models/shared"
)

type UnPinAConversationPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type UnPinAConversationSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UnPinAConversationRequest struct {
	PathParams UnPinAConversationPathParams
	Security   UnPinAConversationSecurity
}

type UnPinAConversationResponse struct {
	Body         []byte
	ContentType  string
	Conversation *interface{}
	StatusCode   int64
}
