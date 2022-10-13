package operations

import (
	"openapi/pkg/models/shared"
)

type AdsensehostAssociationsessionsStartProductCodeEnum string

const (
	AdsensehostAssociationsessionsStartProductCodeEnumAfc  AdsensehostAssociationsessionsStartProductCodeEnum = "AFC"
	AdsensehostAssociationsessionsStartProductCodeEnumAfg  AdsensehostAssociationsessionsStartProductCodeEnum = "AFG"
	AdsensehostAssociationsessionsStartProductCodeEnumAfmc AdsensehostAssociationsessionsStartProductCodeEnum = "AFMC"
	AdsensehostAssociationsessionsStartProductCodeEnumAfs  AdsensehostAssociationsessionsStartProductCodeEnum = "AFS"
	AdsensehostAssociationsessionsStartProductCodeEnumAfv  AdsensehostAssociationsessionsStartProductCodeEnum = "AFV"
)

type AdsensehostAssociationsessionsStartQueryParams struct {
	Alt           *shared.AltEnum                                      `queryParam:"style=form,explode=true,name=alt"`
	CallbackURL   *string                                              `queryParam:"style=form,explode=true,name=callbackUrl"`
	Fields        *string                                              `queryParam:"style=form,explode=true,name=fields"`
	Key           *string                                              `queryParam:"style=form,explode=true,name=key"`
	OauthToken    *string                                              `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint   *bool                                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	ProductCode   []AdsensehostAssociationsessionsStartProductCodeEnum `queryParam:"style=form,explode=true,name=productCode"`
	QuotaUser     *string                                              `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP        *string                                              `queryParam:"style=form,explode=true,name=userIp"`
	UserLocale    *string                                              `queryParam:"style=form,explode=true,name=userLocale"`
	WebsiteLocale *string                                              `queryParam:"style=form,explode=true,name=websiteLocale"`
	WebsiteURL    string                                               `queryParam:"style=form,explode=true,name=websiteUrl"`
}

type AdsensehostAssociationsessionsStartSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsensehostAssociationsessionsStartRequest struct {
	QueryParams AdsensehostAssociationsessionsStartQueryParams
	Security    AdsensehostAssociationsessionsStartSecurity
}

type AdsensehostAssociationsessionsStartResponse struct {
	AssociationSession *shared.AssociationSession
	ContentType        string
	StatusCode         int64
}
