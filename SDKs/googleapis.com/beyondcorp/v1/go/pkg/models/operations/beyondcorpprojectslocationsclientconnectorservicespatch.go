package operations

import (
	"openapi/pkg/models/shared"
)

type BeyondcorpProjectsLocationsClientConnectorServicesPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type BeyondcorpProjectsLocationsClientConnectorServicesPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	AllowMissing   *bool             `queryParam:"style=form,explode=true,name=allowMissing"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestID      *string           `queryParam:"style=form,explode=true,name=requestId"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	ValidateOnly   *bool             `queryParam:"style=form,explode=true,name=validateOnly"`
}

type BeyondcorpProjectsLocationsClientConnectorServicesPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BeyondcorpProjectsLocationsClientConnectorServicesPatchRequest struct {
	PathParams  BeyondcorpProjectsLocationsClientConnectorServicesPatchPathParams
	QueryParams BeyondcorpProjectsLocationsClientConnectorServicesPatchQueryParams
	Request     *shared.ClientConnectorService `request:"mediaType=application/json"`
	Security    BeyondcorpProjectsLocationsClientConnectorServicesPatchSecurity
}

type BeyondcorpProjectsLocationsClientConnectorServicesPatchResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
