package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelRequest struct {
	PathParams  AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelPathParams
	QueryParams AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelQueryParams
	Request     map[string]interface{} `request:"mediaType=application/json"`
	Security    AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelSecurity
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelResponse struct {
	ContentType                                                      string
	GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal *shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal
	StatusCode                                                       int64
}
