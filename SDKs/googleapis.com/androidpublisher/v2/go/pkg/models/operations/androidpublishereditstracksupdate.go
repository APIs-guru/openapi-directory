package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherEditsTracksUpdatePathParams struct {
	EditID      string `pathParam:"style=simple,explode=false,name=editId"`
	PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
	Track       string `pathParam:"style=simple,explode=false,name=track"`
}

type AndroidpublisherEditsTracksUpdateQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AndroidpublisherEditsTracksUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherEditsTracksUpdateRequest struct {
	PathParams  AndroidpublisherEditsTracksUpdatePathParams
	QueryParams AndroidpublisherEditsTracksUpdateQueryParams
	Request     *shared.Track `request:"mediaType=application/json"`
	Security    AndroidpublisherEditsTracksUpdateSecurity
}

type AndroidpublisherEditsTracksUpdateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
