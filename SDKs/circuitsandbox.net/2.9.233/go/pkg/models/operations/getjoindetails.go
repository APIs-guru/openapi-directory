package operations

import (
	"openapi/pkg/models/shared"
)

type GetJoinDetailsPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
}

type GetJoinDetailsSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetJoinDetailsRequest struct {
	PathParams GetJoinDetailsPathParams
	Security   GetJoinDetailsSecurity
}

type GetJoinDetailsResponse struct {
	Body                []byte
	ContentType         string
	ConversationDetails *interface{}
	StatusCode          int64
}
