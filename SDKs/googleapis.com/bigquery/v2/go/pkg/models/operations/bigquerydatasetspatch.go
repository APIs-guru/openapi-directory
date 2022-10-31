package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryDatasetsPatchPathParams struct {
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type BigqueryDatasetsPatchQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type BigqueryDatasetsPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryDatasetsPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryDatasetsPatchSecurity struct {
	Option1 *BigqueryDatasetsPatchSecurityOption1 `security:"option"`
	Option2 *BigqueryDatasetsPatchSecurityOption2 `security:"option"`
}

type BigqueryDatasetsPatchRequest struct {
	PathParams  BigqueryDatasetsPatchPathParams
	QueryParams BigqueryDatasetsPatchQueryParams
	Request     *shared.Dataset `request:"mediaType=application/json"`
	Security    BigqueryDatasetsPatchSecurity
}

type BigqueryDatasetsPatchResponse struct {
	ContentType string
	Dataset     *shared.Dataset
	StatusCode  int64
}
