package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryDatasetsDeletePathParams struct {
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type BigqueryDatasetsDeleteQueryParams struct {
	Alt            *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	DeleteContents *bool           `queryParam:"style=form,explode=true,name=deleteContents"`
	Fields         *string         `queryParam:"style=form,explode=true,name=fields"`
	Key            *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP         *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type BigqueryDatasetsDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryDatasetsDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryDatasetsDeleteSecurity struct {
	Option1 *BigqueryDatasetsDeleteSecurityOption1 `security:"option"`
	Option2 *BigqueryDatasetsDeleteSecurityOption2 `security:"option"`
}

type BigqueryDatasetsDeleteRequest struct {
	PathParams  BigqueryDatasetsDeletePathParams
	QueryParams BigqueryDatasetsDeleteQueryParams
	Security    BigqueryDatasetsDeleteSecurity
}

type BigqueryDatasetsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
