package operations

import (
"openapi/pkg/models/shared")

type BigqueryreservationProjectsLocationsReservationsAssignmentsDeletePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Force *bool `queryParam:"style=form,explode=true,name=force"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurity struct {
    Option1 *BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption1 `security:"option"`
    Option2 *BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption2 `security:"option"`
    
}

type BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteRequest struct {
    PathParams BigqueryreservationProjectsLocationsReservationsAssignmentsDeletePathParams 
    QueryParams BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams 
    Security BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurity 
    
}

type BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

