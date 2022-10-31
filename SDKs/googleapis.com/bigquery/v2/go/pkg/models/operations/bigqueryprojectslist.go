package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryProjectsListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults  *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken   *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type BigqueryProjectsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryProjectsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryProjectsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryProjectsListSecurity struct {
	Option1 *BigqueryProjectsListSecurityOption1 `security:"option"`
	Option2 *BigqueryProjectsListSecurityOption2 `security:"option"`
	Option3 *BigqueryProjectsListSecurityOption3 `security:"option"`
}

type BigqueryProjectsListRequest struct {
	QueryParams BigqueryProjectsListQueryParams
	Security    BigqueryProjectsListSecurity
}

type BigqueryProjectsListResponse struct {
	ContentType string
	ProjectList *shared.ProjectList
	StatusCode  int64
}
