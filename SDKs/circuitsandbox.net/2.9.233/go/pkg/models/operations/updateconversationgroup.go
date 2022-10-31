package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateConversationGroupPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
}

type UpdateConversationGroupRequestBody struct {
	Topic *string `form:"name=topic"`
}

type UpdateConversationGroupSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateConversationGroupRequest struct {
	PathParams UpdateConversationGroupPathParams
	Request    *UpdateConversationGroupRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateConversationGroupSecurity
}

type UpdateConversationGroupResponse struct {
	Body         []byte
	ContentType  string
	Conversation *interface{}
	StatusCode   int64
}
