package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDirectConversationRequestBody struct {
	Participant string `form:"name=participant"`
}

type CreateDirectConversationSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreateDirectConversationRequest struct {
	Request  CreateDirectConversationRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security CreateDirectConversationSecurity
}

type CreateDirectConversationResponse struct {
	Body         []byte
	ContentType  string
	Conversation *interface{}
	StatusCode   int64
}
