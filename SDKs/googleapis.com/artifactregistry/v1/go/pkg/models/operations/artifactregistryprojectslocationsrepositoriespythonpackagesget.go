package operations

import (
"openapi/pkg/models/shared")

type ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}


type ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum string

const (
    ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnumVersionViewUnspecified ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum = "VERSION_VIEW_UNSPECIFIED"
ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnumBasic ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum = "BASIC"
ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnumFull ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum = "FULL"
)


type ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams struct {
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
    View *ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity struct {
    Option1 *ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1 `security:"option"`
    Option2 *ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption2 `security:"option"`
    
}

type ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest struct {
    PathParams ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetPathParams 
    QueryParams ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams 
    Security ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity 
    
}

type ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse struct {
    ContentType string 
    PythonPackage *shared.PythonPackage 
    StatusCode int64 
    
}

