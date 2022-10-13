package operations

import (
	"openapi/pkg/models/shared"
)

type ModerateConversationPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
}

type ModerateConversationSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type ModerateConversationRequest struct {
	PathParams ModerateConversationPathParams
	Security   ModerateConversationSecurity
}

type ModerateConversationResponse struct {
	ContentType string
	StatusCode  int64
}
