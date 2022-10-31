package operations

import (
"openapi/pkg/models/shared")

type DirectoryMembersUpdatePathParams struct {
    GroupKey string `pathParam:"style=simple,explode=false,name=groupKey"`
    MemberKey string `pathParam:"style=simple,explode=false,name=memberKey"`
    
}

type DirectoryMembersUpdateQueryParams struct {
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

type DirectoryMembersUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMembersUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMembersUpdateSecurity struct {
    Option1 *DirectoryMembersUpdateSecurityOption1 `security:"option"`
    Option2 *DirectoryMembersUpdateSecurityOption2 `security:"option"`
    
}

type DirectoryMembersUpdateRequest struct {
    PathParams DirectoryMembersUpdatePathParams 
    QueryParams DirectoryMembersUpdateQueryParams 
    Request *shared.Member `request:"mediaType=application/json"`
    Security DirectoryMembersUpdateSecurity 
    
}

type DirectoryMembersUpdateResponse struct {
    ContentType string 
    Member *shared.Member 
    StatusCode int64 
    
}

