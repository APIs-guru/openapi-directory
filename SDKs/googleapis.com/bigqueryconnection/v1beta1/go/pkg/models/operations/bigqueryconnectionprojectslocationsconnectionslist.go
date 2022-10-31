package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryconnectionProjectsLocationsConnectionsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type BigqueryconnectionProjectsLocationsConnectionsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BigqueryconnectionProjectsLocationsConnectionsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryconnectionProjectsLocationsConnectionsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryconnectionProjectsLocationsConnectionsListSecurity struct {
	Option1 *BigqueryconnectionProjectsLocationsConnectionsListSecurityOption1 `security:"option"`
	Option2 *BigqueryconnectionProjectsLocationsConnectionsListSecurityOption2 `security:"option"`
}

type BigqueryconnectionProjectsLocationsConnectionsListRequest struct {
	PathParams  BigqueryconnectionProjectsLocationsConnectionsListPathParams
	QueryParams BigqueryconnectionProjectsLocationsConnectionsListQueryParams
	Security    BigqueryconnectionProjectsLocationsConnectionsListSecurity
}

type BigqueryconnectionProjectsLocationsConnectionsListResponse struct {
	ContentType             string
	ListConnectionsResponse *shared.ListConnectionsResponse
	StatusCode              int64
}
