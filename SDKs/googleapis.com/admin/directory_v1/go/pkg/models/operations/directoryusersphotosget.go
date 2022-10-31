package operations

import (
"openapi/pkg/models/shared")

type DirectoryUsersPhotosGetPathParams struct {
    UserKey string `pathParam:"style=simple,explode=false,name=userKey"`
    
}

type DirectoryUsersPhotosGetQueryParams struct {
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

type DirectoryUsersPhotosGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryUsersPhotosGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryUsersPhotosGetSecurity struct {
    Option1 *DirectoryUsersPhotosGetSecurityOption1 `security:"option"`
    Option2 *DirectoryUsersPhotosGetSecurityOption2 `security:"option"`
    
}

type DirectoryUsersPhotosGetRequest struct {
    PathParams DirectoryUsersPhotosGetPathParams 
    QueryParams DirectoryUsersPhotosGetQueryParams 
    Security DirectoryUsersPhotosGetSecurity 
    
}

type DirectoryUsersPhotosGetResponse struct {
    ContentType string 
    StatusCode int64 
    UserPhoto *shared.UserPhoto 
    
}

