package operations

import (
	"openapi/pkg/models/shared"
)

type ApigeeOrganizationsSitesApicategoriesPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ApigeeOrganizationsSitesApicategoriesPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ApigeeOrganizationsSitesApicategoriesPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ApigeeOrganizationsSitesApicategoriesPatchRequest struct {
	PathParams  ApigeeOrganizationsSitesApicategoriesPatchPathParams
	QueryParams ApigeeOrganizationsSitesApicategoriesPatchQueryParams
	Request     *shared.GoogleCloudApigeeV1APICategoryData `request:"mediaType=application/json"`
	Security    ApigeeOrganizationsSitesApicategoriesPatchSecurity
}

type ApigeeOrganizationsSitesApicategoriesPatchResponse struct {
	ContentType                    string
	GoogleCloudApigeeV1APICategory *shared.GoogleCloudApigeeV1APICategory
	StatusCode                     int64
}
