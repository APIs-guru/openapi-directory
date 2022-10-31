package operations

import (
	"openapi/pkg/models/shared"
)

type DirectoryDomainAliasesListPathParams struct {
	Customer string `pathParam:"style=simple,explode=false,name=customer"`
}

type DirectoryDomainAliasesListQueryParams struct {
	DollarXgafv      *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken      *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt              *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback         *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields           *string           `queryParam:"style=form,explode=true,name=fields"`
	Key              *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken       *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	ParentDomainName *string           `queryParam:"style=form,explode=true,name=parentDomainName"`
	PrettyPrint      *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser        *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType       *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol   *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DirectoryDomainAliasesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryDomainAliasesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryDomainAliasesListSecurity struct {
	Option1 *DirectoryDomainAliasesListSecurityOption1 `security:"option"`
	Option2 *DirectoryDomainAliasesListSecurityOption2 `security:"option"`
}

type DirectoryDomainAliasesListRequest struct {
	PathParams  DirectoryDomainAliasesListPathParams
	QueryParams DirectoryDomainAliasesListQueryParams
	Security    DirectoryDomainAliasesListSecurity
}

type DirectoryDomainAliasesListResponse struct {
	ContentType   string
	DomainAliases *shared.DomainAliases
	StatusCode    int64
}
