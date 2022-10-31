package operations

import (
	"openapi/pkg/models/shared"
)

type AppengineAppsAuthorizedCertificatesGetPathParams struct {
	AppsID                   string `pathParam:"style=simple,explode=false,name=appsId"`
	AuthorizedCertificatesID string `pathParam:"style=simple,explode=false,name=authorizedCertificatesId"`
}

type AppengineAppsAuthorizedCertificatesGetViewEnum string

const (
	AppengineAppsAuthorizedCertificatesGetViewEnumBasicCertificate AppengineAppsAuthorizedCertificatesGetViewEnum = "BASIC_CERTIFICATE"
	AppengineAppsAuthorizedCertificatesGetViewEnumFullCertificate  AppengineAppsAuthorizedCertificatesGetViewEnum = "FULL_CERTIFICATE"
)

type AppengineAppsAuthorizedCertificatesGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                               `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                         `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                 `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                         `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                         `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                         `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                         `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                         `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                         `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *AppengineAppsAuthorizedCertificatesGetViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type AppengineAppsAuthorizedCertificatesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsAuthorizedCertificatesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsAuthorizedCertificatesGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsAuthorizedCertificatesGetSecurity struct {
	Option1 *AppengineAppsAuthorizedCertificatesGetSecurityOption1 `security:"option"`
	Option2 *AppengineAppsAuthorizedCertificatesGetSecurityOption2 `security:"option"`
	Option3 *AppengineAppsAuthorizedCertificatesGetSecurityOption3 `security:"option"`
}

type AppengineAppsAuthorizedCertificatesGetRequest struct {
	PathParams  AppengineAppsAuthorizedCertificatesGetPathParams
	QueryParams AppengineAppsAuthorizedCertificatesGetQueryParams
	Security    AppengineAppsAuthorizedCertificatesGetSecurity
}

type AppengineAppsAuthorizedCertificatesGetResponse struct {
	AuthorizedCertificate *shared.AuthorizedCertificate
	ContentType           string
	StatusCode            int64
}
