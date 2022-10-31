package operations

import (
"openapi/pkg/models/shared")

type BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams struct {
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

type BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity struct {
    Option1 *BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1 `security:"option"`
    Option2 *BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2 `security:"option"`
    Option3 *BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3 `security:"option"`
    
}

type BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest struct {
    PathParams BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsPathParams 
    QueryParams BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity 
    
}

type BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse struct {
    CheckValidCredsResponse *shared.CheckValidCredsResponse 
    ContentType string 
    StatusCode int64 
    
}

