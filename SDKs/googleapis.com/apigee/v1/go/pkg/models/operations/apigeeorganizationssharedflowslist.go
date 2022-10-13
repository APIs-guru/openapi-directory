package operations

import (
	"openapi/pkg/models/shared"
)

type ApigeeOrganizationsSharedflowsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ApigeeOrganizationsSharedflowsListQueryParams struct {
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

type ApigeeOrganizationsSharedflowsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ApigeeOrganizationsSharedflowsListRequest struct {
	PathParams  ApigeeOrganizationsSharedflowsListPathParams
	QueryParams ApigeeOrganizationsSharedflowsListQueryParams
	Security    ApigeeOrganizationsSharedflowsListSecurity
}

type ApigeeOrganizationsSharedflowsListResponse struct {
	ContentType                                string
	GoogleCloudApigeeV1ListSharedFlowsResponse *shared.GoogleCloudApigeeV1ListSharedFlowsResponse
	StatusCode                                 int64
}
