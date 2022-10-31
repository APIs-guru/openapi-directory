package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherEditsApklistingsDeleteallPathParams struct {
	ApkVersionCode int64  `pathParam:"style=simple,explode=false,name=apkVersionCode"`
	EditID         string `pathParam:"style=simple,explode=false,name=editId"`
	PackageName    string `pathParam:"style=simple,explode=false,name=packageName"`
}

type AndroidpublisherEditsApklistingsDeleteallQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AndroidpublisherEditsApklistingsDeleteallSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherEditsApklistingsDeleteallRequest struct {
	PathParams  AndroidpublisherEditsApklistingsDeleteallPathParams
	QueryParams AndroidpublisherEditsApklistingsDeleteallQueryParams
	Security    AndroidpublisherEditsApklistingsDeleteallSecurity
}

type AndroidpublisherEditsApklistingsDeleteallResponse struct {
	ContentType string
	StatusCode  int64
}
