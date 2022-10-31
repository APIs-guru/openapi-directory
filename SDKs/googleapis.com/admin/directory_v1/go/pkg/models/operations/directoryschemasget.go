package operations

import (
	"openapi/pkg/models/shared"
)

type DirectorySchemasGetPathParams struct {
	CustomerID string `pathParam:"style=simple,explode=false,name=customerId"`
	SchemaKey  string `pathParam:"style=simple,explode=false,name=schemaKey"`
}

type DirectorySchemasGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DirectorySchemasGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectorySchemasGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectorySchemasGetSecurity struct {
	Option1 *DirectorySchemasGetSecurityOption1 `security:"option"`
	Option2 *DirectorySchemasGetSecurityOption2 `security:"option"`
}

type DirectorySchemasGetRequest struct {
	PathParams  DirectorySchemasGetPathParams
	QueryParams DirectorySchemasGetQueryParams
	Security    DirectorySchemasGetSecurity
}

type DirectorySchemasGetResponse struct {
	ContentType string
	Schema      *shared.Schema
	StatusCode  int64
}
