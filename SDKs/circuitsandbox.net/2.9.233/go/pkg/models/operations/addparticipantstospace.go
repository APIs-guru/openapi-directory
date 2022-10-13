package operations

import (
	"openapi/pkg/models/shared"
)

type AddParticipantsToSpacePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AddParticipantsToSpaceRequestBodyRoleEnum string

const (
	AddParticipantsToSpaceRequestBodyRoleEnumDefault     AddParticipantsToSpaceRequestBodyRoleEnum = "DEFAULT"
	AddParticipantsToSpaceRequestBodyRoleEnumModerator   AddParticipantsToSpaceRequestBodyRoleEnum = "MODERATOR"
	AddParticipantsToSpaceRequestBodyRoleEnumAuthor      AddParticipantsToSpaceRequestBodyRoleEnum = "AUTHOR"
	AddParticipantsToSpaceRequestBodyRoleEnumParticipant AddParticipantsToSpaceRequestBodyRoleEnum = "PARTICIPANT"
	AddParticipantsToSpaceRequestBodyRoleEnumReader      AddParticipantsToSpaceRequestBodyRoleEnum = "READER"
)

type AddParticipantsToSpaceRequestBody struct {
	Role   AddParticipantsToSpaceRequestBodyRoleEnum `form:"name=role"`
	UserID []string                                  `form:"name=userId"`
}

type AddParticipantsToSpaceSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type AddParticipantsToSpaceRequest struct {
	PathParams AddParticipantsToSpacePathParams
	Request    AddParticipantsToSpaceRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   AddParticipantsToSpaceSecurity
}

type AddParticipantsToSpaceResponse struct {
	Body                  []byte
	ContentType           string
	ParticipantAddResults []interface{}
	StatusCode            int64
}
