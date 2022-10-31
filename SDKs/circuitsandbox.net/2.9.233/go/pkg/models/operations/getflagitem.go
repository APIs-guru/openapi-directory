package operations

import (
	"openapi/pkg/models/shared"
)

type GetFlagItemPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
}

type GetFlagItemSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetFlagItemRequest struct {
	PathParams GetFlagItemPathParams
	Security   GetFlagItemSecurity
}

type GetFlagItemResponse struct {
	Body              []byte
	ContentType       string
	ConversationItems []interface{}
	StatusCode        int64
}
