package operations

import (
"openapi/pkg/models/shared")

type BigqueryreservationProjectsLocationsReservationsAssignmentsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type BigqueryreservationProjectsLocationsReservationsAssignmentsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    AssignmentID *string `queryParam:"style=form,explode=true,name=assignmentId"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurity struct {
    Option1 *BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurityOption1 `security:"option"`
    Option2 *BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurityOption2 `security:"option"`
    
}

type BigqueryreservationProjectsLocationsReservationsAssignmentsCreateRequest struct {
    PathParams BigqueryreservationProjectsLocationsReservationsAssignmentsCreatePathParams 
    QueryParams BigqueryreservationProjectsLocationsReservationsAssignmentsCreateQueryParams 
    Request *shared.Assignment `request:"mediaType=application/json"`
    Security BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurity 
    
}

type BigqueryreservationProjectsLocationsReservationsAssignmentsCreateResponse struct {
    Assignment *shared.Assignment 
    ContentType string 
    StatusCode int64 
    
}

