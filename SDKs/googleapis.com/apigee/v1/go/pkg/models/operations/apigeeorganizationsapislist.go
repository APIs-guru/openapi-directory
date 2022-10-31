package operations

import (
	"openapi/pkg/models/shared"
)

type ApigeeOrganizationsApisListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ApigeeOrganizationsApisListQueryParams struct {
	DollarXgafv      *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken      *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt              *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback         *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields           *string           `queryParam:"style=form,explode=true,name=fields"`
	IncludeMetaData  *bool             `queryParam:"style=form,explode=true,name=includeMetaData"`
	IncludeRevisions *bool             `queryParam:"style=form,explode=true,name=includeRevisions"`
	Key              *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken       *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint      *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser        *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType       *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol   *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ApigeeOrganizationsApisListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ApigeeOrganizationsApisListRequest struct {
	PathParams  ApigeeOrganizationsApisListPathParams
	QueryParams ApigeeOrganizationsApisListQueryParams
	Security    ApigeeOrganizationsApisListSecurity
}

type ApigeeOrganizationsApisListResponse struct {
	ContentType                               string
	GoogleCloudApigeeV1ListAPIProxiesResponse *shared.GoogleCloudApigeeV1ListAPIProxiesResponse
	StatusCode                                int64
}
