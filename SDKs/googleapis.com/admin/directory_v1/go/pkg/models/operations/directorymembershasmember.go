package operations

import (
"openapi/pkg/models/shared")

type DirectoryMembersHasMemberPathParams struct {
    GroupKey string `pathParam:"style=simple,explode=false,name=groupKey"`
    MemberKey string `pathParam:"style=simple,explode=false,name=memberKey"`
    
}

type DirectoryMembersHasMemberQueryParams struct {
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

type DirectoryMembersHasMemberSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMembersHasMemberSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMembersHasMemberSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMembersHasMemberSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryMembersHasMemberSecurity struct {
    Option1 *DirectoryMembersHasMemberSecurityOption1 `security:"option"`
    Option2 *DirectoryMembersHasMemberSecurityOption2 `security:"option"`
    Option3 *DirectoryMembersHasMemberSecurityOption3 `security:"option"`
    Option4 *DirectoryMembersHasMemberSecurityOption4 `security:"option"`
    
}

type DirectoryMembersHasMemberRequest struct {
    PathParams DirectoryMembersHasMemberPathParams 
    QueryParams DirectoryMembersHasMemberQueryParams 
    Security DirectoryMembersHasMemberSecurity 
    
}

type DirectoryMembersHasMemberResponse struct {
    ContentType string 
    MembersHasMember *shared.MembersHasMember 
    StatusCode int64 
    
}

