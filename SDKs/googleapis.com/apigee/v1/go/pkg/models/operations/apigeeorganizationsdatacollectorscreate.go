package operations

import (
	"openapi/pkg/models/shared"
)

type ApigeeOrganizationsDatacollectorsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ApigeeOrganizationsDatacollectorsCreateQueryParams struct {
	DollarXgafv     *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken     *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt             *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback        *string           `queryParam:"style=form,explode=true,name=callback"`
	DataCollectorID *string           `queryParam:"style=form,explode=true,name=dataCollectorId"`
	Fields          *string           `queryParam:"style=form,explode=true,name=fields"`
	Key             *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken      *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint     *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser       *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType      *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol  *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ApigeeOrganizationsDatacollectorsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ApigeeOrganizationsDatacollectorsCreateRequest struct {
	PathParams  ApigeeOrganizationsDatacollectorsCreatePathParams
	QueryParams ApigeeOrganizationsDatacollectorsCreateQueryParams
	Request     *shared.GoogleCloudApigeeV1DataCollector `request:"mediaType=application/json"`
	Security    ApigeeOrganizationsDatacollectorsCreateSecurity
}

type ApigeeOrganizationsDatacollectorsCreateResponse struct {
	ContentType                      string
	GoogleCloudApigeeV1DataCollector *shared.GoogleCloudApigeeV1DataCollector
	StatusCode                       int64
}
