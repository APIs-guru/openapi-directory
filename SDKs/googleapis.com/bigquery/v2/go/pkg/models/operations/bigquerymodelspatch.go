package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryModelsPatchPathParams struct {
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
	ModelID   string `pathParam:"style=simple,explode=false,name=modelId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type BigqueryModelsPatchQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type BigqueryModelsPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryModelsPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryModelsPatchSecurity struct {
	Option1 *BigqueryModelsPatchSecurityOption1 `security:"option"`
	Option2 *BigqueryModelsPatchSecurityOption2 `security:"option"`
}

type BigqueryModelsPatchRequest struct {
	PathParams  BigqueryModelsPatchPathParams
	QueryParams BigqueryModelsPatchQueryParams
	Request     *shared.ModelInput `request:"mediaType=application/json"`
	Security    BigqueryModelsPatchSecurity
}

type BigqueryModelsPatchResponse struct {
	ContentType string
	Model       *shared.Model
	StatusCode  int64
}
