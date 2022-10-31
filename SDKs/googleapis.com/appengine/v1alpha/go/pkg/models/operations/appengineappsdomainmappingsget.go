package operations

import (
	"openapi/pkg/models/shared"
)

type AppengineAppsDomainMappingsGetPathParams struct {
	AppsID           string `pathParam:"style=simple,explode=false,name=appsId"`
	DomainMappingsID string `pathParam:"style=simple,explode=false,name=domainMappingsId"`
}

type AppengineAppsDomainMappingsGetQueryParams struct {
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

type AppengineAppsDomainMappingsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsDomainMappingsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsDomainMappingsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsDomainMappingsGetSecurity struct {
	Option1 *AppengineAppsDomainMappingsGetSecurityOption1 `security:"option"`
	Option2 *AppengineAppsDomainMappingsGetSecurityOption2 `security:"option"`
	Option3 *AppengineAppsDomainMappingsGetSecurityOption3 `security:"option"`
}

type AppengineAppsDomainMappingsGetRequest struct {
	PathParams  AppengineAppsDomainMappingsGetPathParams
	QueryParams AppengineAppsDomainMappingsGetQueryParams
	Security    AppengineAppsDomainMappingsGetSecurity
}

type AppengineAppsDomainMappingsGetResponse struct {
	ContentType   string
	DomainMapping *shared.DomainMapping
	StatusCode    int64
}
