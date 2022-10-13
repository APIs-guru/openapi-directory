package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSpaceRequestBodyAccessModeTypeEnum string

const (
	CreateSpaceRequestBodyAccessModeTypeEnumInternalOnly     CreateSpaceRequestBodyAccessModeTypeEnum = "INTERNAL_ONLY"
	CreateSpaceRequestBodyAccessModeTypeEnumInternalExternal CreateSpaceRequestBodyAccessModeTypeEnum = "INTERNAL_EXTERNAL"
)

type CreateSpaceRequestBodyRoleEnum string

const (
	CreateSpaceRequestBodyRoleEnumModerator   CreateSpaceRequestBodyRoleEnum = "MODERATOR"
	CreateSpaceRequestBodyRoleEnumAuthor      CreateSpaceRequestBodyRoleEnum = "AUTHOR"
	CreateSpaceRequestBodyRoleEnumParticipant CreateSpaceRequestBodyRoleEnum = "PARTICIPANT"
	CreateSpaceRequestBodyRoleEnumReader      CreateSpaceRequestBodyRoleEnum = "READER"
)

type CreateSpaceRequestBodyStatusEnum string

const (
	CreateSpaceRequestBodyStatusEnumEnabled  CreateSpaceRequestBodyStatusEnum = "ENABLED"
	CreateSpaceRequestBodyStatusEnumDisabled CreateSpaceRequestBodyStatusEnum = "DISABLED"
)

type CreateSpaceRequestBodyTypeEnum string

const (
	CreateSpaceRequestBodyTypeEnumOpen   CreateSpaceRequestBodyTypeEnum = "OPEN"
	CreateSpaceRequestBodyTypeEnumClosed CreateSpaceRequestBodyTypeEnum = "CLOSED"
	CreateSpaceRequestBodyTypeEnumSecret CreateSpaceRequestBodyTypeEnum = "SECRET"
)

type CreateSpaceRequestBody struct {
	AccessModeType     CreateSpaceRequestBodyAccessModeTypeEnum `form:"name=accessModeType"`
	Description        *string                                  `form:"name=description"`
	LargePictureBase64 *string                                  `form:"name=largePictureBase64"`
	Name               string                                   `form:"name=name"`
	Role               CreateSpaceRequestBodyRoleEnum           `form:"name=role"`
	SmallPictureBase64 *string                                  `form:"name=smallPictureBase64"`
	Status             CreateSpaceRequestBodyStatusEnum         `form:"name=status"`
	Tags               []string                                 `form:"name=tags"`
	Type               CreateSpaceRequestBodyTypeEnum           `form:"name=type"`
}

type CreateSpaceSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreateSpaceRequest struct {
	Request  CreateSpaceRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security CreateSpaceSecurity
}

type CreateSpaceResponse struct {
	Body                    []byte
	ContentType             string
	ParticipantSpaceWrapper *interface{}
	StatusCode              int64
}
