package operations

import (
	"openapi/pkg/models/shared"
)

type DirectoryGroupsAliasesDeletePathParams struct {
	Alias    string `pathParam:"style=simple,explode=false,name=alias"`
	GroupKey string `pathParam:"style=simple,explode=false,name=groupKey"`
}

type DirectoryGroupsAliasesDeleteQueryParams struct {
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

type DirectoryGroupsAliasesDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryGroupsAliasesDeleteRequest struct {
	PathParams  DirectoryGroupsAliasesDeletePathParams
	QueryParams DirectoryGroupsAliasesDeleteQueryParams
	Security    DirectoryGroupsAliasesDeleteSecurity
}

type DirectoryGroupsAliasesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
