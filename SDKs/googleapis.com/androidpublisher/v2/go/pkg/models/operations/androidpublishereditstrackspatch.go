package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherEditsTracksPatchPathParams struct {
	EditID      string `pathParam:"style=simple,explode=false,name=editId"`
	PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
	Track       string `pathParam:"style=simple,explode=false,name=track"`
}

type AndroidpublisherEditsTracksPatchQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AndroidpublisherEditsTracksPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherEditsTracksPatchRequest struct {
	PathParams  AndroidpublisherEditsTracksPatchPathParams
	QueryParams AndroidpublisherEditsTracksPatchQueryParams
	Request     *shared.Track `request:"mediaType=application/json"`
	Security    AndroidpublisherEditsTracksPatchSecurity
}

type AndroidpublisherEditsTracksPatchResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
