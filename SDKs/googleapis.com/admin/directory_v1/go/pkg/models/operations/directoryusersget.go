package operations

import (
	"openapi/pkg/models/shared"
)

type DirectoryUsersGetPathParams struct {
	UserKey string `pathParam:"style=simple,explode=false,name=userKey"`
}

type DirectoryUsersGetProjectionEnum string

const (
	DirectoryUsersGetProjectionEnumBasic  DirectoryUsersGetProjectionEnum = "basic"
	DirectoryUsersGetProjectionEnumCustom DirectoryUsersGetProjectionEnum = "custom"
	DirectoryUsersGetProjectionEnumFull   DirectoryUsersGetProjectionEnum = "full"
)

type DirectoryUsersGetViewTypeEnum string

const (
	DirectoryUsersGetViewTypeEnumAdminView    DirectoryUsersGetViewTypeEnum = "admin_view"
	DirectoryUsersGetViewTypeEnumDomainPublic DirectoryUsersGetViewTypeEnum = "domain_public"
)

type DirectoryUsersGetQueryParams struct {
	DollarXgafv     *shared.XgafvEnum                `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken     *string                          `queryParam:"style=form,explode=true,name=access_token"`
	Alt             *shared.AltEnum                  `queryParam:"style=form,explode=true,name=alt"`
	Callback        *string                          `queryParam:"style=form,explode=true,name=callback"`
	CustomFieldMask *string                          `queryParam:"style=form,explode=true,name=customFieldMask"`
	Fields          *string                          `queryParam:"style=form,explode=true,name=fields"`
	Key             *string                          `queryParam:"style=form,explode=true,name=key"`
	OauthToken      *string                          `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint     *bool                            `queryParam:"style=form,explode=true,name=prettyPrint"`
	Projection      *DirectoryUsersGetProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
	QuotaUser       *string                          `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType      *string                          `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol  *string                          `queryParam:"style=form,explode=true,name=upload_protocol"`
	ViewType        *DirectoryUsersGetViewTypeEnum   `queryParam:"style=form,explode=true,name=viewType"`
}

type DirectoryUsersGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryUsersGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryUsersGetSecurity struct {
	Option1 *DirectoryUsersGetSecurityOption1 `security:"option"`
	Option2 *DirectoryUsersGetSecurityOption2 `security:"option"`
}

type DirectoryUsersGetRequest struct {
	PathParams  DirectoryUsersGetPathParams
	QueryParams DirectoryUsersGetQueryParams
	Security    DirectoryUsersGetSecurity
}

type DirectoryUsersGetResponse struct {
	ContentType string
	StatusCode  int64
	User        *shared.User
}
