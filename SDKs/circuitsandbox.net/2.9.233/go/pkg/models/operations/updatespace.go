package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSpacePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateSpaceRequestBodyAccessModeTypeEnum string

const (
	UpdateSpaceRequestBodyAccessModeTypeEnumInternalOnly     UpdateSpaceRequestBodyAccessModeTypeEnum = "INTERNAL_ONLY"
	UpdateSpaceRequestBodyAccessModeTypeEnumInternalExternal UpdateSpaceRequestBodyAccessModeTypeEnum = "INTERNAL_EXTERNAL"
	UpdateSpaceRequestBodyAccessModeTypeEnumNoChange         UpdateSpaceRequestBodyAccessModeTypeEnum = "NO_CHANGE"
)

type UpdateSpaceRequestBodyRoleEnum string

const (
	UpdateSpaceRequestBodyRoleEnumModerator   UpdateSpaceRequestBodyRoleEnum = "MODERATOR"
	UpdateSpaceRequestBodyRoleEnumAuthor      UpdateSpaceRequestBodyRoleEnum = "AUTHOR"
	UpdateSpaceRequestBodyRoleEnumParticipant UpdateSpaceRequestBodyRoleEnum = "PARTICIPANT"
	UpdateSpaceRequestBodyRoleEnumReader      UpdateSpaceRequestBodyRoleEnum = "READER"
	UpdateSpaceRequestBodyRoleEnumNoChange    UpdateSpaceRequestBodyRoleEnum = "NO_CHANGE"
)

type UpdateSpaceRequestBodyStatusEnum string

const (
	UpdateSpaceRequestBodyStatusEnumEnabled  UpdateSpaceRequestBodyStatusEnum = "ENABLED"
	UpdateSpaceRequestBodyStatusEnumDisabled UpdateSpaceRequestBodyStatusEnum = "DISABLED"
)

type UpdateSpaceRequestBodyTypeEnum string

const (
	UpdateSpaceRequestBodyTypeEnumOpen     UpdateSpaceRequestBodyTypeEnum = "OPEN"
	UpdateSpaceRequestBodyTypeEnumClosed   UpdateSpaceRequestBodyTypeEnum = "CLOSED"
	UpdateSpaceRequestBodyTypeEnumSecret   UpdateSpaceRequestBodyTypeEnum = "SECRET"
	UpdateSpaceRequestBodyTypeEnumNoChange UpdateSpaceRequestBodyTypeEnum = "NO_CHANGE"
)

type UpdateSpaceRequestBody struct {
	AccessModeType     *UpdateSpaceRequestBodyAccessModeTypeEnum `form:"name=accessModeType"`
	Description        *string                                   `form:"name=description"`
	LargePictureBase64 *string                                   `form:"name=largePictureBase64"`
	Name               *string                                   `form:"name=name"`
	OwnerID            *string                                   `form:"name=ownerId"`
	Role               *UpdateSpaceRequestBodyRoleEnum           `form:"name=role"`
	SmallPictureBase64 *string                                   `form:"name=smallPictureBase64"`
	Status             *UpdateSpaceRequestBodyStatusEnum         `form:"name=status"`
	Tags               []string                                  `form:"name=tags"`
	Type               *UpdateSpaceRequestBodyTypeEnum           `form:"name=type"`
}

type UpdateSpaceSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateSpaceRequest struct {
	PathParams UpdateSpacePathParams
	Request    *UpdateSpaceRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSpaceSecurity
}

type UpdateSpaceResponse struct {
	Body                    []byte
	ContentType             string
	ParticipantSpaceWrapper *interface{}
	StatusCode              int64
}
