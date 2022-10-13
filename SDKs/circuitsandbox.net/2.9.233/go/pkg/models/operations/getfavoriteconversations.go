package operations

import (
	"openapi/pkg/models/shared"
)

type GetFavoriteConversationsSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetFavoriteConversationsRequest struct {
	Security GetFavoriteConversationsSecurity
}

type GetFavoriteConversationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
