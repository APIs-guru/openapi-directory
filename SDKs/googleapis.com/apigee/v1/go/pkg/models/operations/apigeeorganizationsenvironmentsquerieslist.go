package operations

import (
	"openapi/pkg/models/shared"
)

type ApigeeOrganizationsEnvironmentsQueriesListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ApigeeOrganizationsEnvironmentsQueriesListQueryParams struct {
	DollarXgafv              *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken              *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                      *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                 *string           `queryParam:"style=form,explode=true,name=callback"`
	Dataset                  *string           `queryParam:"style=form,explode=true,name=dataset"`
	Fields                   *string           `queryParam:"style=form,explode=true,name=fields"`
	From                     *string           `queryParam:"style=form,explode=true,name=from"`
	InclQueriesWithoutReport *string           `queryParam:"style=form,explode=true,name=inclQueriesWithoutReport"`
	Key                      *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken               *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint              *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	Status                   *string           `queryParam:"style=form,explode=true,name=status"`
	SubmittedBy              *string           `queryParam:"style=form,explode=true,name=submittedBy"`
	To                       *string           `queryParam:"style=form,explode=true,name=to"`
	UploadType               *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol           *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ApigeeOrganizationsEnvironmentsQueriesListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ApigeeOrganizationsEnvironmentsQueriesListRequest struct {
	PathParams  ApigeeOrganizationsEnvironmentsQueriesListPathParams
	QueryParams ApigeeOrganizationsEnvironmentsQueriesListQueryParams
	Security    ApigeeOrganizationsEnvironmentsQueriesListSecurity
}

type ApigeeOrganizationsEnvironmentsQueriesListResponse struct {
	ContentType                                 string
	GoogleCloudApigeeV1ListAsyncQueriesResponse *shared.GoogleCloudApigeeV1ListAsyncQueriesResponse
	StatusCode                                  int64
}
