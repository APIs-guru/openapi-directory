package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherEditsDetailsUpdatePathParams struct {
	EditID      string `pathParam:"style=simple,explode=false,name=editId"`
	PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
}

type AndroidpublisherEditsDetailsUpdateQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AndroidpublisherEditsDetailsUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherEditsDetailsUpdateRequest struct {
	PathParams  AndroidpublisherEditsDetailsUpdatePathParams
	QueryParams AndroidpublisherEditsDetailsUpdateQueryParams
	Request     *shared.AppDetails `request:"mediaType=application/json"`
	Security    AndroidpublisherEditsDetailsUpdateSecurity
}

type AndroidpublisherEditsDetailsUpdateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
