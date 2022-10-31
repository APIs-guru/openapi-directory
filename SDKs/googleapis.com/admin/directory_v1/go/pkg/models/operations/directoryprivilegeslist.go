package operations

import (
	"openapi/pkg/models/shared"
)

type DirectoryPrivilegesListPathParams struct {
	Customer string `pathParam:"style=simple,explode=false,name=customer"`
}

type DirectoryPrivilegesListQueryParams struct {
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

type DirectoryPrivilegesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryPrivilegesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryPrivilegesListSecurity struct {
	Option1 *DirectoryPrivilegesListSecurityOption1 `security:"option"`
	Option2 *DirectoryPrivilegesListSecurityOption2 `security:"option"`
}

type DirectoryPrivilegesListRequest struct {
	PathParams  DirectoryPrivilegesListPathParams
	QueryParams DirectoryPrivilegesListQueryParams
	Security    DirectoryPrivilegesListSecurity
}

type DirectoryPrivilegesListResponse struct {
	ContentType string
	Privileges  *shared.Privileges
	StatusCode  int64
}
