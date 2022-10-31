package operations

import (
	"openapi/pkg/models/shared"
)

type AddParticipantCommunityPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
}

type AddParticipantCommunityRequestBody struct {
	Participants []string `form:"name=participants"`
}

type AddParticipantCommunitySecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type AddParticipantCommunityRequest struct {
	PathParams AddParticipantCommunityPathParams
	Request    AddParticipantCommunityRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   AddParticipantCommunitySecurity
}

type AddParticipantCommunityResponse struct {
	Body         []byte
	ContentType  string
	Conversation *interface{}
	StatusCode   int64
}
