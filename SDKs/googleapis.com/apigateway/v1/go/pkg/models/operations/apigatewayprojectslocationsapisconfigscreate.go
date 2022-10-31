package operations

import (
	"openapi/pkg/models/shared"
)

type ApigatewayProjectsLocationsApisConfigsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ApigatewayProjectsLocationsApisConfigsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	APIConfigID    *string           `queryParam:"style=form,explode=true,name=apiConfigId"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ApigatewayProjectsLocationsApisConfigsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ApigatewayProjectsLocationsApisConfigsCreateRequest struct {
	PathParams  ApigatewayProjectsLocationsApisConfigsCreatePathParams
	QueryParams ApigatewayProjectsLocationsApisConfigsCreateQueryParams
	Request     *shared.ApigatewayAPIConfig `request:"mediaType=application/json"`
	Security    ApigatewayProjectsLocationsApisConfigsCreateSecurity
}

type ApigatewayProjectsLocationsApisConfigsCreateResponse struct {
	ApigatewayOperation *shared.ApigatewayOperation
	ContentType         string
	StatusCode          int64
}
