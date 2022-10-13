package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsadminPropertiesUserLinksCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type AnalyticsadminPropertiesUserLinksCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	NotifyNewUser  *bool             `queryParam:"style=form,explode=true,name=notifyNewUser"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AnalyticsadminPropertiesUserLinksCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsadminPropertiesUserLinksCreateRequest struct {
	PathParams  AnalyticsadminPropertiesUserLinksCreatePathParams
	QueryParams AnalyticsadminPropertiesUserLinksCreateQueryParams
	Request     *shared.GoogleAnalyticsAdminV1alphaUserLink `request:"mediaType=application/json"`
	Security    AnalyticsadminPropertiesUserLinksCreateSecurity
}

type AnalyticsadminPropertiesUserLinksCreateResponse struct {
	ContentType                         string
	GoogleAnalyticsAdminV1alphaUserLink *shared.GoogleAnalyticsAdminV1alphaUserLink
	StatusCode                          int64
}
