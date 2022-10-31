package operations

import (
"openapi/pkg/models/shared")

type DirectoryResourcesBuildingsGetPathParams struct {
    BuildingID string `pathParam:"style=simple,explode=false,name=buildingId"`
    Customer string `pathParam:"style=simple,explode=false,name=customer"`
    
}

type DirectoryResourcesBuildingsGetQueryParams struct {
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

type DirectoryResourcesBuildingsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryResourcesBuildingsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryResourcesBuildingsGetSecurity struct {
    Option1 *DirectoryResourcesBuildingsGetSecurityOption1 `security:"option"`
    Option2 *DirectoryResourcesBuildingsGetSecurityOption2 `security:"option"`
    
}

type DirectoryResourcesBuildingsGetRequest struct {
    PathParams DirectoryResourcesBuildingsGetPathParams 
    QueryParams DirectoryResourcesBuildingsGetQueryParams 
    Security DirectoryResourcesBuildingsGetSecurity 
    
}

type DirectoryResourcesBuildingsGetResponse struct {
    Building *shared.Building 
    ContentType string 
    StatusCode int64 
    
}

