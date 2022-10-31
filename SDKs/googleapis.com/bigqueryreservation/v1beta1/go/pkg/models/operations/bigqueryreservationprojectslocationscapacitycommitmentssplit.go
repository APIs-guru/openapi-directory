package operations

import (
"openapi/pkg/models/shared")

type BigqueryreservationProjectsLocationsCapacityCommitmentsSplitPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurity struct {
    Option1 *BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption1 `security:"option"`
    Option2 *BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption2 `security:"option"`
    
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest struct {
    PathParams BigqueryreservationProjectsLocationsCapacityCommitmentsSplitPathParams 
    QueryParams BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams 
    Request *shared.SplitCapacityCommitmentRequest `request:"mediaType=application/json"`
    Security BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurity 
    
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse struct {
    ContentType string 
    SplitCapacityCommitmentResponse *shared.SplitCapacityCommitmentResponse 
    StatusCode int64 
    
}

