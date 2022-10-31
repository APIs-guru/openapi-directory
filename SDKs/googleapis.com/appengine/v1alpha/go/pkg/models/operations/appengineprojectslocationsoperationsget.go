package operations

import (
"openapi/pkg/models/shared")

type AppengineProjectsLocationsOperationsGetPathParams struct {
    LocationsID string `pathParam:"style=simple,explode=false,name=locationsId"`
    OperationsID string `pathParam:"style=simple,explode=false,name=operationsId"`
    ProjectsID string `pathParam:"style=simple,explode=false,name=projectsId"`
    
}

type AppengineProjectsLocationsOperationsGetQueryParams struct {
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

type AppengineProjectsLocationsOperationsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineProjectsLocationsOperationsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineProjectsLocationsOperationsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineProjectsLocationsOperationsGetSecurity struct {
    Option1 *AppengineProjectsLocationsOperationsGetSecurityOption1 `security:"option"`
    Option2 *AppengineProjectsLocationsOperationsGetSecurityOption2 `security:"option"`
    Option3 *AppengineProjectsLocationsOperationsGetSecurityOption3 `security:"option"`
    
}

type AppengineProjectsLocationsOperationsGetRequest struct {
    PathParams AppengineProjectsLocationsOperationsGetPathParams 
    QueryParams AppengineProjectsLocationsOperationsGetQueryParams 
    Security AppengineProjectsLocationsOperationsGetSecurity 
    
}

type AppengineProjectsLocationsOperationsGetResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

