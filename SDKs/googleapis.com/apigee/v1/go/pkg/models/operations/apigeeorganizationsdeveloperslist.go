package operations

import (
	"openapi/pkg/models/shared"
)

type ApigeeOrganizationsDevelopersListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ApigeeOrganizationsDevelopersListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	App            *string           `queryParam:"style=form,explode=true,name=app"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Count          *string           `queryParam:"style=form,explode=true,name=count"`
	Expand         *bool             `queryParam:"style=form,explode=true,name=expand"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Ids            *string           `queryParam:"style=form,explode=true,name=ids"`
	IncludeCompany *bool             `queryParam:"style=form,explode=true,name=includeCompany"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	StartKey       *string           `queryParam:"style=form,explode=true,name=startKey"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ApigeeOrganizationsDevelopersListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ApigeeOrganizationsDevelopersListRequest struct {
	PathParams  ApigeeOrganizationsDevelopersListPathParams
	QueryParams ApigeeOrganizationsDevelopersListQueryParams
	Security    ApigeeOrganizationsDevelopersListSecurity
}

type ApigeeOrganizationsDevelopersListResponse struct {
	ContentType                                 string
	GoogleCloudApigeeV1ListOfDevelopersResponse *shared.GoogleCloudApigeeV1ListOfDevelopersResponse
	StatusCode                                  int64
}
