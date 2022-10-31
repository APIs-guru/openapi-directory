package operations

import (
	"openapi/pkg/models/shared"
)

type GetParticipantsImportDataPathParams struct {
	SpaceID string `pathParam:"style=simple,explode=false,name=spaceId"`
}

type GetParticipantsImportDataSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetParticipantsImportDataRequest struct {
	PathParams GetParticipantsImportDataPathParams
	Security   GetParticipantsImportDataSecurity
}

type GetParticipantsImportDataResponse struct {
	Body                         []byte
	ContentType                  string
	ParticipantsImportDataResult *interface{}
	StatusCode                   int64
}
