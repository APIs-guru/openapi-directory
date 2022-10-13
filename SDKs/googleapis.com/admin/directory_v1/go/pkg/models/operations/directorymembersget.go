package operations

import (
	"openapi/pkg/models/shared"
)

type DirectoryMembersGetPathParams struct {
	GroupKey  string `pathParam:"style=simple,explode=false,name=groupKey"`
	MemberKey string `pathParam:"style=simple,explode=false,name=memberKey"`
}

type DirectoryMembersGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DirectoryMembersGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryMembersGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryMembersGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryMembersGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryMembersGetSecurity struct {
	Option1 *DirectoryMembersGetSecurityOption1 `security:"option"`
	Option2 *DirectoryMembersGetSecurityOption2 `security:"option"`
	Option3 *DirectoryMembersGetSecurityOption3 `security:"option"`
	Option4 *DirectoryMembersGetSecurityOption4 `security:"option"`
}

type DirectoryMembersGetRequest struct {
	PathParams  DirectoryMembersGetPathParams
	QueryParams DirectoryMembersGetQueryParams
	Security    DirectoryMembersGetSecurity
}

type DirectoryMembersGetResponse struct {
	ContentType string
	Member      *shared.Member
	StatusCode  int64
}
