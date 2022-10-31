package operations

import (
	"openapi/pkg/models/shared"
)

type UndoArchiveConversationPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
}

type UndoArchiveConversationSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UndoArchiveConversationRequest struct {
	PathParams UndoArchiveConversationPathParams
	Security   UndoArchiveConversationSecurity
}

type UndoArchiveConversationResponse struct {
	ContentType string
	StatusCode  int64
}
