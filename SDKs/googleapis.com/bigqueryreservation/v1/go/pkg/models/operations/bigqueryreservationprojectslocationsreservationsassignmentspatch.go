package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryreservationProjectsLocationsReservationsAssignmentsPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurity struct {
	Option1 *BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption1 `security:"option"`
	Option2 *BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption2 `security:"option"`
}

type BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest struct {
	PathParams  BigqueryreservationProjectsLocationsReservationsAssignmentsPatchPathParams
	QueryParams BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams
	Request     *shared.Assignment `request:"mediaType=application/json"`
	Security    BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurity
}

type BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse struct {
	Assignment  *shared.Assignment
	ContentType string
	StatusCode  int64
}
