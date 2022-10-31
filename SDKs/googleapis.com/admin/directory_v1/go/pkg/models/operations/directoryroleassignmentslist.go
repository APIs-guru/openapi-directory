package operations

import (
"openapi/pkg/models/shared")

type DirectoryRoleAssignmentsListPathParams struct {
    Customer string `pathParam:"style=simple,explode=false,name=customer"`
    
}

type DirectoryRoleAssignmentsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RoleID *string `queryParam:"style=form,explode=true,name=roleId"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    UserKey *string `queryParam:"style=form,explode=true,name=userKey"`
    
}

type DirectoryRoleAssignmentsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryRoleAssignmentsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryRoleAssignmentsListSecurity struct {
    Option1 *DirectoryRoleAssignmentsListSecurityOption1 `security:"option"`
    Option2 *DirectoryRoleAssignmentsListSecurityOption2 `security:"option"`
    
}

type DirectoryRoleAssignmentsListRequest struct {
    PathParams DirectoryRoleAssignmentsListPathParams 
    QueryParams DirectoryRoleAssignmentsListQueryParams 
    Security DirectoryRoleAssignmentsListSecurity 
    
}

type DirectoryRoleAssignmentsListResponse struct {
    ContentType string 
    RoleAssignments *shared.RoleAssignments 
    StatusCode int64 
    
}

