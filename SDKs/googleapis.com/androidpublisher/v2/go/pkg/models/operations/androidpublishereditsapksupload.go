package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherEditsApksUploadPathParams struct {
	EditID      string `pathParam:"style=simple,explode=false,name=editId"`
	PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
}

type AndroidpublisherEditsApksUploadQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AndroidpublisherEditsApksUploadSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherEditsApksUploadRequest struct {
	PathParams  AndroidpublisherEditsApksUploadPathParams
	QueryParams AndroidpublisherEditsApksUploadQueryParams
	Security    AndroidpublisherEditsApksUploadSecurity
}

type AndroidpublisherEditsApksUploadResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
