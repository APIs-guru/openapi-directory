package operations

import (
"openapi/pkg/models/shared")

type DirectoryResourcesBuildingsListPathParams struct {
    Customer string `pathParam:"style=simple,explode=false,name=customer"`
    
}

type DirectoryResourcesBuildingsListQueryParams struct {
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
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DirectoryResourcesBuildingsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryResourcesBuildingsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryResourcesBuildingsListSecurity struct {
    Option1 *DirectoryResourcesBuildingsListSecurityOption1 `security:"option"`
    Option2 *DirectoryResourcesBuildingsListSecurityOption2 `security:"option"`
    
}

type DirectoryResourcesBuildingsListRequest struct {
    PathParams DirectoryResourcesBuildingsListPathParams 
    QueryParams DirectoryResourcesBuildingsListQueryParams 
    Security DirectoryResourcesBuildingsListSecurity 
    
}

type DirectoryResourcesBuildingsListResponse struct {
    Buildings *shared.Buildings 
    ContentType string 
    StatusCode int64 
    
}

