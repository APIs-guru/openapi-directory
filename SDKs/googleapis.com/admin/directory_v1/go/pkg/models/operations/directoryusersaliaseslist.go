package operations

import (
"openapi/pkg/models/shared")

type DirectoryUsersAliasesListPathParams struct {
    UserKey string `pathParam:"style=simple,explode=false,name=userKey"`
    
}


type DirectoryUsersAliasesListEventEnum string

const (
    DirectoryUsersAliasesListEventEnumAdd DirectoryUsersAliasesListEventEnum = "add"
DirectoryUsersAliasesListEventEnumDelete DirectoryUsersAliasesListEventEnum = "delete"
)


type DirectoryUsersAliasesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Event *DirectoryUsersAliasesListEventEnum `queryParam:"style=form,explode=true,name=event"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DirectoryUsersAliasesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryUsersAliasesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryUsersAliasesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryUsersAliasesListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryUsersAliasesListSecurity struct {
    Option1 *DirectoryUsersAliasesListSecurityOption1 `security:"option"`
    Option2 *DirectoryUsersAliasesListSecurityOption2 `security:"option"`
    Option3 *DirectoryUsersAliasesListSecurityOption3 `security:"option"`
    Option4 *DirectoryUsersAliasesListSecurityOption4 `security:"option"`
    
}

type DirectoryUsersAliasesListRequest struct {
    PathParams DirectoryUsersAliasesListPathParams 
    QueryParams DirectoryUsersAliasesListQueryParams 
    Security DirectoryUsersAliasesListSecurity 
    
}

type DirectoryUsersAliasesListResponse struct {
    Aliases *shared.Aliases 
    ContentType string 
    StatusCode int64 
    
}

