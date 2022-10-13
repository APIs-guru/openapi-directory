package operations

import (
	"openapi/pkg/models/shared"
)

type DirectoryUsersAliasesWatchPathParams struct {
	UserKey string `pathParam:"style=simple,explode=false,name=userKey"`
}

type DirectoryUsersAliasesWatchEventEnum string

const (
	DirectoryUsersAliasesWatchEventEnumAdd    DirectoryUsersAliasesWatchEventEnum = "add"
	DirectoryUsersAliasesWatchEventEnumDelete DirectoryUsersAliasesWatchEventEnum = "delete"
)

type DirectoryUsersAliasesWatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                    `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                              `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                      `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                              `queryParam:"style=form,explode=true,name=callback"`
	Event          *DirectoryUsersAliasesWatchEventEnum `queryParam:"style=form,explode=true,name=event"`
	Fields         *string                              `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                              `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                              `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                              `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                              `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                              `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DirectoryUsersAliasesWatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryUsersAliasesWatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryUsersAliasesWatchSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryUsersAliasesWatchSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryUsersAliasesWatchSecurity struct {
	Option1 *DirectoryUsersAliasesWatchSecurityOption1 `security:"option"`
	Option2 *DirectoryUsersAliasesWatchSecurityOption2 `security:"option"`
	Option3 *DirectoryUsersAliasesWatchSecurityOption3 `security:"option"`
	Option4 *DirectoryUsersAliasesWatchSecurityOption4 `security:"option"`
}

type DirectoryUsersAliasesWatchRequest struct {
	PathParams  DirectoryUsersAliasesWatchPathParams
	QueryParams DirectoryUsersAliasesWatchQueryParams
	Request     *shared.Channel `request:"mediaType=application/json"`
	Security    DirectoryUsersAliasesWatchSecurity
}

type DirectoryUsersAliasesWatchResponse struct {
	Channel     *shared.Channel
	ContentType string
	StatusCode  int64
}
