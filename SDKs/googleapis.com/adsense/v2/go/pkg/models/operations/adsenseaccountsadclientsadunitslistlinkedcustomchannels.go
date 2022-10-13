package operations

import (
	"openapi/pkg/models/shared"
)

type AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurity struct {
	Option1 *AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurityOption1 `security:"option"`
	Option2 *AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurityOption2 `security:"option"`
}

type AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsRequest struct {
	PathParams  AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsPathParams
	QueryParams AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsQueryParams
	Security    AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurity
}

type AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsResponse struct {
	ContentType                      string
	ListLinkedCustomChannelsResponse *shared.ListLinkedCustomChannelsResponse
	StatusCode                       int64
}
