package operations

import (
	"openapi/pkg/models/shared"
)

type JoinCommunityConversationPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
}

type JoinCommunityConversationSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type JoinCommunityConversationRequest struct {
	PathParams JoinCommunityConversationPathParams
	Security   JoinCommunityConversationSecurity
}

type JoinCommunityConversationResponse struct {
	Body         []byte
	ContentType  string
	Conversation *interface{}
	StatusCode   int64
}
