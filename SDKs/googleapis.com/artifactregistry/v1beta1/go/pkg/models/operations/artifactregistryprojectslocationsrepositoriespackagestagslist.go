package operations

import (
"openapi/pkg/models/shared")

type ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurity struct {
    Option1 *ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurityOption1 `security:"option"`
    Option2 *ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurityOption2 `security:"option"`
    
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListRequest struct {
    PathParams ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListPathParams 
    QueryParams ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListQueryParams 
    Security ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurity 
    
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListResponse struct {
    ContentType string 
    ListTagsResponse *shared.ListTagsResponse 
    StatusCode int64 
    
}

