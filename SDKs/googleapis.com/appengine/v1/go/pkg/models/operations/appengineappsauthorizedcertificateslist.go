package operations

import (
	"openapi/pkg/models/shared"
)

type AppengineAppsAuthorizedCertificatesListPathParams struct {
	AppsID string `pathParam:"style=simple,explode=false,name=appsId"`
}

type AppengineAppsAuthorizedCertificatesListViewEnum string

const (
	AppengineAppsAuthorizedCertificatesListViewEnumBasicCertificate AppengineAppsAuthorizedCertificatesListViewEnum = "BASIC_CERTIFICATE"
	AppengineAppsAuthorizedCertificatesListViewEnumFullCertificate  AppengineAppsAuthorizedCertificatesListViewEnum = "FULL_CERTIFICATE"
)

type AppengineAppsAuthorizedCertificatesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                          `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                  `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                          `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                          `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                          `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                          `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                                           `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                          `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                            `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                          `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                          `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                          `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *AppengineAppsAuthorizedCertificatesListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type AppengineAppsAuthorizedCertificatesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsAuthorizedCertificatesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsAuthorizedCertificatesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsAuthorizedCertificatesListSecurity struct {
	Option1 *AppengineAppsAuthorizedCertificatesListSecurityOption1 `security:"option"`
	Option2 *AppengineAppsAuthorizedCertificatesListSecurityOption2 `security:"option"`
	Option3 *AppengineAppsAuthorizedCertificatesListSecurityOption3 `security:"option"`
}

type AppengineAppsAuthorizedCertificatesListRequest struct {
	PathParams  AppengineAppsAuthorizedCertificatesListPathParams
	QueryParams AppengineAppsAuthorizedCertificatesListQueryParams
	Security    AppengineAppsAuthorizedCertificatesListSecurity
}

type AppengineAppsAuthorizedCertificatesListResponse struct {
	ContentType                        string
	ListAuthorizedCertificatesResponse *shared.ListAuthorizedCertificatesResponse
	StatusCode                         int64
}
