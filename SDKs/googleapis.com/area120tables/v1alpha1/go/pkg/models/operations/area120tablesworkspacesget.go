package operations

import (
"openapi/pkg/models/shared")

type Area120tablesWorkspacesGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}


type Area120tablesWorkspacesGetViewEnum string

const (
    Area120tablesWorkspacesGetViewEnumViewUnspecified Area120tablesWorkspacesGetViewEnum = "VIEW_UNSPECIFIED"
Area120tablesWorkspacesGetViewEnumColumnIDView Area120tablesWorkspacesGetViewEnum = "COLUMN_ID_VIEW"
)


type Area120tablesWorkspacesGetQueryParams struct {
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
    View *Area120tablesWorkspacesGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type Area120tablesWorkspacesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesWorkspacesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesWorkspacesGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesWorkspacesGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesWorkspacesGetSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesWorkspacesGetSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesWorkspacesGetSecurity struct {
    Option1 *Area120tablesWorkspacesGetSecurityOption1 `security:"option"`
    Option2 *Area120tablesWorkspacesGetSecurityOption2 `security:"option"`
    Option3 *Area120tablesWorkspacesGetSecurityOption3 `security:"option"`
    Option4 *Area120tablesWorkspacesGetSecurityOption4 `security:"option"`
    Option5 *Area120tablesWorkspacesGetSecurityOption5 `security:"option"`
    Option6 *Area120tablesWorkspacesGetSecurityOption6 `security:"option"`
    
}

type Area120tablesWorkspacesGetRequest struct {
    PathParams Area120tablesWorkspacesGetPathParams 
    QueryParams Area120tablesWorkspacesGetQueryParams 
    Security Area120tablesWorkspacesGetSecurity 
    
}

type Area120tablesWorkspacesGetResponse struct {
    ContentType string 
    StatusCode int64 
    Workspace *shared.Workspace 
    
}

