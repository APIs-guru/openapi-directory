package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateParticipantInSpacePathParams struct {
	SpaceID string `pathParam:"style=simple,explode=false,name=spaceId"`
}

type UpdateParticipantInSpaceRequestBodyRoleEnum string

const (
	UpdateParticipantInSpaceRequestBodyRoleEnumModerator   UpdateParticipantInSpaceRequestBodyRoleEnum = "MODERATOR"
	UpdateParticipantInSpaceRequestBodyRoleEnumAuthor      UpdateParticipantInSpaceRequestBodyRoleEnum = "AUTHOR"
	UpdateParticipantInSpaceRequestBodyRoleEnumParticipant UpdateParticipantInSpaceRequestBodyRoleEnum = "PARTICIPANT"
	UpdateParticipantInSpaceRequestBodyRoleEnumReader      UpdateParticipantInSpaceRequestBodyRoleEnum = "READER"
)

type UpdateParticipantInSpaceRequestBody struct {
	Role   UpdateParticipantInSpaceRequestBodyRoleEnum `form:"name=role"`
	UserID string                                      `form:"name=userId"`
}

type UpdateParticipantInSpaceSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateParticipantInSpaceRequest struct {
	PathParams UpdateParticipantInSpacePathParams
	Request    UpdateParticipantInSpaceRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateParticipantInSpaceSecurity
}

type UpdateParticipantInSpaceResponse struct {
	ContentType string
	StatusCode  int64
}
