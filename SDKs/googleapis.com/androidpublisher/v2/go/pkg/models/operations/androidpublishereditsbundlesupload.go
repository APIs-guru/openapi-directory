package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherEditsBundlesUploadPathParams struct {
	EditID      string `pathParam:"style=simple,explode=false,name=editId"`
	PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
}

type AndroidpublisherEditsBundlesUploadQueryParams struct {
	AckBundleInstallationWarning *bool           `queryParam:"style=form,explode=true,name=ackBundleInstallationWarning"`
	Alt                          *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields                       *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                          *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken                   *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                  *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                    *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP                       *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AndroidpublisherEditsBundlesUploadSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherEditsBundlesUploadRequest struct {
	PathParams  AndroidpublisherEditsBundlesUploadPathParams
	QueryParams AndroidpublisherEditsBundlesUploadQueryParams
	Security    AndroidpublisherEditsBundlesUploadSecurity
}

type AndroidpublisherEditsBundlesUploadResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
