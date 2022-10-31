package operations

import (
"openapi/pkg/models/shared")

type BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams struct {
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

type BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity struct {
    Option1 *BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption1 `security:"option"`
    Option2 *BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption2 `security:"option"`
    
}

type BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest struct {
    PathParams BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialPathParams 
    QueryParams BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams 
    Request *shared.ConnectionCredential `request:"mediaType=application/json"`
    Security BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity 
    
}

type BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

