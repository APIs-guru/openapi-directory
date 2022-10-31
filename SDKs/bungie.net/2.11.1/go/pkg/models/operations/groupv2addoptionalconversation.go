package operations

import (
	"openapi/pkg/models/shared"
)

type GroupV2AddOptionalConversationPathParams struct {
	GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
}

type GroupV2AddOptionalConversationSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GroupV2AddOptionalConversationRequest struct {
	PathParams GroupV2AddOptionalConversationPathParams
	Security   GroupV2AddOptionalConversationSecurity
}

type GroupV2AddOptionalConversationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
