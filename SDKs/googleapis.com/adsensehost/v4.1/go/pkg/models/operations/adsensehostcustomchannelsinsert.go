package operations

import (
	"openapi/pkg/models/shared"
)

type AdsensehostCustomchannelsInsertPathParams struct {
	AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
}

type AdsensehostCustomchannelsInsertQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdsensehostCustomchannelsInsertSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsensehostCustomchannelsInsertRequest struct {
	PathParams  AdsensehostCustomchannelsInsertPathParams
	QueryParams AdsensehostCustomchannelsInsertQueryParams
	Request     *shared.CustomChannel `request:"mediaType=application/json"`
	Security    AdsensehostCustomchannelsInsertSecurity
}

type AdsensehostCustomchannelsInsertResponse struct {
	ContentType   string
	CustomChannel *shared.CustomChannel
	StatusCode    int64
}
