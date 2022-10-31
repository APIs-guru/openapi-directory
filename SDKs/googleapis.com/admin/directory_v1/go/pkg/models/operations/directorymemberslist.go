package operations

import (
"openapi/pkg/models/shared")

type DirectoryMembersListPathParams struct {
    GroupKey string `pathParam:"style=simple,explode=false,name=groupKey"`
    
}

type DirectoryMembersListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IncludeDerivedMembership *bool `queryParam:"style=form,explode=true,name=includeDerivedMembership"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Roles *string `queryParam:"style=form,explode=true,name=roles"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DirectoryMembersListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMembersListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMembersListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMembersListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMembersListSecurity struct {
    Option1 *DirectoryMembersListSecurityOption1 `security:"option"`
    Option2 *DirectoryMembersListSecurityOption2 `security:"option"`
    Option3 *DirectoryMembersListSecurityOption3 `security:"option"`
    Option4 *DirectoryMembersListSecurityOption4 `security:"option"`
    
}

type DirectoryMembersListRequest struct {
    PathParams DirectoryMembersListPathParams 
    QueryParams DirectoryMembersListQueryParams 
    Security DirectoryMembersListSecurity 
    
}

type DirectoryMembersListResponse struct {
    ContentType string 
    Members *shared.Members 
    StatusCode int64 
    
}

