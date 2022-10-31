package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherEditsTestersUpdatePathParams struct {
	EditID      string `pathParam:"style=simple,explode=false,name=editId"`
	PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
	Track       string `pathParam:"style=simple,explode=false,name=track"`
}

type AndroidpublisherEditsTestersUpdateQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AndroidpublisherEditsTestersUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherEditsTestersUpdateRequest struct {
	PathParams  AndroidpublisherEditsTestersUpdatePathParams
	QueryParams AndroidpublisherEditsTestersUpdateQueryParams
	Request     *shared.Testers `request:"mediaType=application/json"`
	Security    AndroidpublisherEditsTestersUpdateSecurity
}

type AndroidpublisherEditsTestersUpdateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
