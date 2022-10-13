package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProfileRequestBodyLocaleEnum string

const (
	UpdateProfileRequestBodyLocaleEnumEnUs     UpdateProfileRequestBodyLocaleEnum = "EN_US"
	UpdateProfileRequestBodyLocaleEnumDeDe     UpdateProfileRequestBodyLocaleEnum = "DE_DE"
	UpdateProfileRequestBodyLocaleEnumEnGb     UpdateProfileRequestBodyLocaleEnum = "EN_GB"
	UpdateProfileRequestBodyLocaleEnumEsEs     UpdateProfileRequestBodyLocaleEnum = "ES_ES"
	UpdateProfileRequestBodyLocaleEnumFrFr     UpdateProfileRequestBodyLocaleEnum = "FR_FR"
	UpdateProfileRequestBodyLocaleEnumItIt     UpdateProfileRequestBodyLocaleEnum = "IT_IT"
	UpdateProfileRequestBodyLocaleEnumRuRu     UpdateProfileRequestBodyLocaleEnum = "RU_RU"
	UpdateProfileRequestBodyLocaleEnumZhHansCn UpdateProfileRequestBodyLocaleEnum = "ZH_HANS_CN"
	UpdateProfileRequestBodyLocaleEnumPtBr     UpdateProfileRequestBodyLocaleEnum = "PT_BR"
	UpdateProfileRequestBodyLocaleEnumNlNl     UpdateProfileRequestBodyLocaleEnum = "NL_NL"
	UpdateProfileRequestBodyLocaleEnumCaEs     UpdateProfileRequestBodyLocaleEnum = "CA_ES"
)

type UpdateProfileRequestBody struct {
	Firstname *string                             `form:"name=firstname"`
	JobTitle  *string                             `form:"name=jobTitle"`
	Lastname  *string                             `form:"name=lastname"`
	Locale    *UpdateProfileRequestBodyLocaleEnum `form:"name=locale"`
}

type UpdateProfileSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateProfileRequest struct {
	Request  *UpdateProfileRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security UpdateProfileSecurity
}

type UpdateProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	User        *interface{}
}
