package operations

import (
"openapi/pkg/models/shared")

type BigqueryconnectionProjectsLocationsConnectionsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ConnectionID *string `queryParam:"style=form,explode=true,name=connectionId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryconnectionProjectsLocationsConnectionsCreateSecurity struct {
    Option1 *BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1 `security:"option"`
    Option2 *BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption2 `security:"option"`
    
}

type BigqueryconnectionProjectsLocationsConnectionsCreateRequest struct {
    PathParams BigqueryconnectionProjectsLocationsConnectionsCreatePathParams 
    QueryParams BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams 
    Request *shared.Connection `request:"mediaType=application/json"`
    Security BigqueryconnectionProjectsLocationsConnectionsCreateSecurity 
    
}

type BigqueryconnectionProjectsLocationsConnectionsCreateResponse struct {
    Connection *shared.Connection 
    ContentType string 
    StatusCode int64 
    
}

