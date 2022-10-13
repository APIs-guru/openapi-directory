package operations

import (
	"openapi/pkg/models/shared"
)

type ApigeeOrganizationsEnvironmentsKeystoresAliasesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams struct {
	DollarXgafv             *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	Password                *string           `queryParam:"style=form,explode=true,name=_password"`
	AccessToken             *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alias                   *string           `queryParam:"style=form,explode=true,name=alias"`
	Alt                     *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                  *string           `queryParam:"style=form,explode=true,name=fields"`
	Format                  *string           `queryParam:"style=form,explode=true,name=format"`
	IgnoreExpiryValidation  *bool             `queryParam:"style=form,explode=true,name=ignoreExpiryValidation"`
	IgnoreNewlineValidation *bool             `queryParam:"style=form,explode=true,name=ignoreNewlineValidation"`
	Key                     *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken              *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint             *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser               *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType              *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol          *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest struct {
	PathParams  ApigeeOrganizationsEnvironmentsKeystoresAliasesCreatePathParams
	QueryParams ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateQueryParams
	Request     *shared.GoogleAPIHTTPBody `request:"mediaType=application/json"`
	Security    ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateSecurity
}

type ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateResponse struct {
	ContentType              string
	GoogleCloudApigeeV1Alias *shared.GoogleCloudApigeeV1Alias
	StatusCode               int64
}
