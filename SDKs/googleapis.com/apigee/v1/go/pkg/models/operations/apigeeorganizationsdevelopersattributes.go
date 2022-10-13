package operations

import (
	"openapi/pkg/models/shared"
)

type ApigeeOrganizationsDevelopersAttributesPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ApigeeOrganizationsDevelopersAttributesQueryParams struct {
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

type ApigeeOrganizationsDevelopersAttributesSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ApigeeOrganizationsDevelopersAttributesRequest struct {
	PathParams  ApigeeOrganizationsDevelopersAttributesPathParams
	QueryParams ApigeeOrganizationsDevelopersAttributesQueryParams
	Request     *shared.GoogleCloudApigeeV1Attributes `request:"mediaType=application/json"`
	Security    ApigeeOrganizationsDevelopersAttributesSecurity
}

type ApigeeOrganizationsDevelopersAttributesResponse struct {
	ContentType                   string
	GoogleCloudApigeeV1Attributes *shared.GoogleCloudApigeeV1Attributes
	StatusCode                    int64
}
