package operations

import (
	"openapi/pkg/models/shared"
)

type BeyondcorpProjectsLocationsAppConnectionsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams struct {
	DollarXgafv     *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken     *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt             *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	AppConnectionID *string           `queryParam:"style=form,explode=true,name=appConnectionId"`
	Callback        *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields          *string           `queryParam:"style=form,explode=true,name=fields"`
	Key             *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken      *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint     *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser       *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestID       *string           `queryParam:"style=form,explode=true,name=requestId"`
	UploadType      *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol  *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	ValidateOnly    *bool             `queryParam:"style=form,explode=true,name=validateOnly"`
}

type BeyondcorpProjectsLocationsAppConnectionsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BeyondcorpProjectsLocationsAppConnectionsCreateRequest struct {
	PathParams  BeyondcorpProjectsLocationsAppConnectionsCreatePathParams
	QueryParams BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams
	Request     *shared.GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput `request:"mediaType=application/json"`
	Security    BeyondcorpProjectsLocationsAppConnectionsCreateSecurity
}

type BeyondcorpProjectsLocationsAppConnectionsCreateResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
