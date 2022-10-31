package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryRowAccessPoliciesListPathParams struct {
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
	TableID   string `pathParam:"style=simple,explode=false,name=tableId"`
}

type BigqueryRowAccessPoliciesListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize    *int64          `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken   *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type BigqueryRowAccessPoliciesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryRowAccessPoliciesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryRowAccessPoliciesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryRowAccessPoliciesListSecurity struct {
	Option1 *BigqueryRowAccessPoliciesListSecurityOption1 `security:"option"`
	Option2 *BigqueryRowAccessPoliciesListSecurityOption2 `security:"option"`
	Option3 *BigqueryRowAccessPoliciesListSecurityOption3 `security:"option"`
}

type BigqueryRowAccessPoliciesListRequest struct {
	PathParams  BigqueryRowAccessPoliciesListPathParams
	QueryParams BigqueryRowAccessPoliciesListQueryParams
	Security    BigqueryRowAccessPoliciesListSecurity
}

type BigqueryRowAccessPoliciesListResponse struct {
	ContentType                   string
	ListRowAccessPoliciesResponse *shared.ListRowAccessPoliciesResponse
	StatusCode                    int64
}
