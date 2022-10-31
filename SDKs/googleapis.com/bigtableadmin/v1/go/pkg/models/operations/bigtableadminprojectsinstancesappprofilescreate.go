package operations

import (
"openapi/pkg/models/shared")

type BigtableadminProjectsInstancesAppProfilesCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type BigtableadminProjectsInstancesAppProfilesCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    AppProfileID *string `queryParam:"style=form,explode=true,name=appProfileId"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IgnoreWarnings *bool `queryParam:"style=form,explode=true,name=ignoreWarnings"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BigtableadminProjectsInstancesAppProfilesCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesAppProfilesCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesAppProfilesCreateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesAppProfilesCreateSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesAppProfilesCreateSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesAppProfilesCreateSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesAppProfilesCreateSecurity struct {
    Option1 *BigtableadminProjectsInstancesAppProfilesCreateSecurityOption1 `security:"option"`
    Option2 *BigtableadminProjectsInstancesAppProfilesCreateSecurityOption2 `security:"option"`
    Option3 *BigtableadminProjectsInstancesAppProfilesCreateSecurityOption3 `security:"option"`
    Option4 *BigtableadminProjectsInstancesAppProfilesCreateSecurityOption4 `security:"option"`
    Option5 *BigtableadminProjectsInstancesAppProfilesCreateSecurityOption5 `security:"option"`
    Option6 *BigtableadminProjectsInstancesAppProfilesCreateSecurityOption6 `security:"option"`
    
}

type BigtableadminProjectsInstancesAppProfilesCreateRequest struct {
    PathParams BigtableadminProjectsInstancesAppProfilesCreatePathParams 
    QueryParams BigtableadminProjectsInstancesAppProfilesCreateQueryParams 
    Request *shared.AppProfile `request:"mediaType=application/json"`
    Security BigtableadminProjectsInstancesAppProfilesCreateSecurity 
    
}

type BigtableadminProjectsInstancesAppProfilesCreateResponse struct {
    AppProfile *shared.AppProfile 
    ContentType string 
    StatusCode int64 
    
}

