package operations

import (
"openapi/pkg/models/shared")

type ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    TagID *string `queryParam:"style=form,explode=true,name=tagId"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest struct {
    PathParams ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreatePathParams 
    QueryParams ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateQueryParams 
    Request *shared.Tag `request:"mediaType=application/json"`
    Security ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateSecurity 
    
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateResponse struct {
    ContentType string 
    StatusCode int64 
    Tag *shared.Tag 
    
}

