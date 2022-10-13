package operations

import (
	"openapi/pkg/models/shared"
)

type BeyondcorpProjectsLocationsNetConnectionsPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type BeyondcorpProjectsLocationsNetConnectionsPatchQueryParams struct {
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

type BeyondcorpProjectsLocationsNetConnectionsPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BeyondcorpProjectsLocationsNetConnectionsPatchRequest struct {
	PathParams  BeyondcorpProjectsLocationsNetConnectionsPatchPathParams
	QueryParams BeyondcorpProjectsLocationsNetConnectionsPatchQueryParams
	Request     *shared.GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnection `request:"mediaType=application/json"`
	Security    BeyondcorpProjectsLocationsNetConnectionsPatchSecurity
}

type BeyondcorpProjectsLocationsNetConnectionsPatchResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
