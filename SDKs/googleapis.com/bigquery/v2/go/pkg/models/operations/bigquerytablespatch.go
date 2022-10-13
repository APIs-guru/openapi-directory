package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryTablesPatchPathParams struct {
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
	TableID   string `pathParam:"style=simple,explode=false,name=tableId"`
}

type BigqueryTablesPatchQueryParams struct {
	Alt              *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	AutodetectSchema *bool           `queryParam:"style=form,explode=true,name=autodetect_schema"`
	Fields           *string         `queryParam:"style=form,explode=true,name=fields"`
	Key              *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken       *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint      *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser        *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP           *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type BigqueryTablesPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryTablesPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryTablesPatchSecurity struct {
	Option1 *BigqueryTablesPatchSecurityOption1 `security:"option"`
	Option2 *BigqueryTablesPatchSecurityOption2 `security:"option"`
}

type BigqueryTablesPatchRequest struct {
	PathParams  BigqueryTablesPatchPathParams
	QueryParams BigqueryTablesPatchQueryParams
	Request     *shared.Table `request:"mediaType=application/json"`
	Security    BigqueryTablesPatchSecurity
}

type BigqueryTablesPatchResponse struct {
	ContentType string
	StatusCode  int64
	Table       *shared.Table
}
