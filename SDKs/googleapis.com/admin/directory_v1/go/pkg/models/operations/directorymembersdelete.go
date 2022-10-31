package operations

import (
"openapi/pkg/models/shared")

type DirectoryMembersDeletePathParams struct {
    GroupKey string `pathParam:"style=simple,explode=false,name=groupKey"`
    MemberKey string `pathParam:"style=simple,explode=false,name=memberKey"`
    
}

type DirectoryMembersDeleteQueryParams struct {
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

type DirectoryMembersDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMembersDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMembersDeleteSecurity struct {
    Option1 *DirectoryMembersDeleteSecurityOption1 `security:"option"`
    Option2 *DirectoryMembersDeleteSecurityOption2 `security:"option"`
    
}

type DirectoryMembersDeleteRequest struct {
    PathParams DirectoryMembersDeletePathParams 
    QueryParams DirectoryMembersDeleteQueryParams 
    Security DirectoryMembersDeleteSecurity 
    
}

type DirectoryMembersDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

