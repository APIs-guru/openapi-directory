package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveParticipantGroupPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
}

type RemoveParticipantGroupQueryParams struct {
	Participants []string `queryParam:"style=form,explode=true,name=participants"`
}

type RemoveParticipantGroupSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type RemoveParticipantGroupRequest struct {
	PathParams  RemoveParticipantGroupPathParams
	QueryParams RemoveParticipantGroupQueryParams
	Security    RemoveParticipantGroupSecurity
}

type RemoveParticipantGroupResponse struct {
	Body         []byte
	ContentType  string
	Conversation *interface{}
	StatusCode   int64
}
