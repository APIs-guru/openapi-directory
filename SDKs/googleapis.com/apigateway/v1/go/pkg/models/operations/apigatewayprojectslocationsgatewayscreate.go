package operations

import (
	"openapi/pkg/models/shared"
)

type ApigatewayProjectsLocationsGatewaysCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ApigatewayProjectsLocationsGatewaysCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	GatewayID      *string           `queryParam:"style=form,explode=true,name=gatewayId"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ApigatewayProjectsLocationsGatewaysCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ApigatewayProjectsLocationsGatewaysCreateRequest struct {
	PathParams  ApigatewayProjectsLocationsGatewaysCreatePathParams
	QueryParams ApigatewayProjectsLocationsGatewaysCreateQueryParams
	Request     *shared.ApigatewayGatewayInput `request:"mediaType=application/json"`
	Security    ApigatewayProjectsLocationsGatewaysCreateSecurity
}

type ApigatewayProjectsLocationsGatewaysCreateResponse struct {
	ApigatewayOperation *shared.ApigatewayOperation
	ContentType         string
	StatusCode          int64
}
