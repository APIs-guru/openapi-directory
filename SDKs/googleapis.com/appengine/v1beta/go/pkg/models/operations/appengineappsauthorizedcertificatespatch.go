package operations

import (
	"openapi/pkg/models/shared"
)

type AppengineAppsAuthorizedCertificatesPatchPathParams struct {
	AppsID                   string `pathParam:"style=simple,explode=false,name=appsId"`
	AuthorizedCertificatesID string `pathParam:"style=simple,explode=false,name=authorizedCertificatesId"`
}

type AppengineAppsAuthorizedCertificatesPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AppengineAppsAuthorizedCertificatesPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsAuthorizedCertificatesPatchRequest struct {
	PathParams  AppengineAppsAuthorizedCertificatesPatchPathParams
	QueryParams AppengineAppsAuthorizedCertificatesPatchQueryParams
	Request     *shared.AuthorizedCertificate `request:"mediaType=application/json"`
	Security    AppengineAppsAuthorizedCertificatesPatchSecurity
}

type AppengineAppsAuthorizedCertificatesPatchResponse struct {
	AuthorizedCertificate *shared.AuthorizedCertificate
	ContentType           string
	StatusCode            int64
}
