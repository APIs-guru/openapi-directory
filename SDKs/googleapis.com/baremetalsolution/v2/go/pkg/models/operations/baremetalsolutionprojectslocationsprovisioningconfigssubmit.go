package operations

import (
	"openapi/pkg/models/shared"
)

type BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitQueryParams struct {
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

type BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitRequest struct {
	PathParams  BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitPathParams
	QueryParams BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitQueryParams
	Request     *shared.SubmitProvisioningConfigRequest `request:"mediaType=application/json"`
	Security    BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitSecurity
}

type BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitResponse struct {
	ContentType                      string
	StatusCode                       int64
	SubmitProvisioningConfigResponse *shared.SubmitProvisioningConfigResponse
}
