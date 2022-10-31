package operations

import (
	"openapi/pkg/models/shared"
)

type AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams struct {
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

type AndroiddeviceprovisioningCustomersConfigurationsCreateRequest struct {
	PathParams  AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams
	QueryParams AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams
	Request     *shared.Configuration `request:"mediaType=application/json"`
}

type AndroiddeviceprovisioningCustomersConfigurationsCreateResponse struct {
	Configuration *shared.Configuration
	ContentType   string
	StatusCode    int64
}
