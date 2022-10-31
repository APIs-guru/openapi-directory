package operations

import (
"openapi/pkg/models/shared")

type DirectoryRolesGetPathParams struct {
    Customer string `pathParam:"style=simple,explode=false,name=customer"`
    RoleID string `pathParam:"style=simple,explode=false,name=roleId"`
    
}

type DirectoryRolesGetQueryParams struct {
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

type DirectoryRolesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryRolesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryRolesGetSecurity struct {
    Option1 *DirectoryRolesGetSecurityOption1 `security:"option"`
    Option2 *DirectoryRolesGetSecurityOption2 `security:"option"`
    
}

type DirectoryRolesGetRequest struct {
    PathParams DirectoryRolesGetPathParams 
    QueryParams DirectoryRolesGetQueryParams 
    Security DirectoryRolesGetSecurity 
    
}

type DirectoryRolesGetResponse struct {
    ContentType string 
    Role *shared.Role 
    StatusCode int64 
    
}

