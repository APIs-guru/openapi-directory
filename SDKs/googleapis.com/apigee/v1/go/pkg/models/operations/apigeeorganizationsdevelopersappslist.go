package operations

import (
	"openapi/pkg/models/shared"
)

type ApigeeOrganizationsDevelopersAppsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ApigeeOrganizationsDevelopersAppsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Count          *string           `queryParam:"style=form,explode=true,name=count"`
	Expand         *bool             `queryParam:"style=form,explode=true,name=expand"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	IncludeCred    *bool             `queryParam:"style=form,explode=true,name=includeCred"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	KeyStatus      *string           `queryParam:"style=form,explode=true,name=keyStatus"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	Rows           *string           `queryParam:"style=form,explode=true,name=rows"`
	ShallowExpand  *bool             `queryParam:"style=form,explode=true,name=shallowExpand"`
	StartKey       *string           `queryParam:"style=form,explode=true,name=startKey"`
	Status         *string           `queryParam:"style=form,explode=true,name=status"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ApigeeOrganizationsDevelopersAppsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ApigeeOrganizationsDevelopersAppsListRequest struct {
	PathParams  ApigeeOrganizationsDevelopersAppsListPathParams
	QueryParams ApigeeOrganizationsDevelopersAppsListQueryParams
	Security    ApigeeOrganizationsDevelopersAppsListSecurity
}

type ApigeeOrganizationsDevelopersAppsListResponse struct {
	ContentType                                  string
	GoogleCloudApigeeV1ListDeveloperAppsResponse *shared.GoogleCloudApigeeV1ListDeveloperAppsResponse
	StatusCode                                   int64
}
