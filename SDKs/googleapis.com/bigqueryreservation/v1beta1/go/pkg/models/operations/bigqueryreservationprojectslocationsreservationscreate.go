package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryreservationProjectsLocationsReservationsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type BigqueryreservationProjectsLocationsReservationsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ReservationID  *string           `queryParam:"style=form,explode=true,name=reservationId"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BigqueryreservationProjectsLocationsReservationsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryreservationProjectsLocationsReservationsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryreservationProjectsLocationsReservationsCreateSecurity struct {
	Option1 *BigqueryreservationProjectsLocationsReservationsCreateSecurityOption1 `security:"option"`
	Option2 *BigqueryreservationProjectsLocationsReservationsCreateSecurityOption2 `security:"option"`
}

type BigqueryreservationProjectsLocationsReservationsCreateRequest struct {
	PathParams  BigqueryreservationProjectsLocationsReservationsCreatePathParams
	QueryParams BigqueryreservationProjectsLocationsReservationsCreateQueryParams
	Request     *shared.Reservation `request:"mediaType=application/json"`
	Security    BigqueryreservationProjectsLocationsReservationsCreateSecurity
}

type BigqueryreservationProjectsLocationsReservationsCreateResponse struct {
	ContentType string
	Reservation *shared.Reservation
	StatusCode  int64
}
