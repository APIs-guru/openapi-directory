package operations

import (
"openapi/pkg/models/shared")

type BigqueryDatasetsGetPathParams struct {
    DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type BigqueryDatasetsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type BigqueryDatasetsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryDatasetsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryDatasetsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryDatasetsGetSecurity struct {
    Option1 *BigqueryDatasetsGetSecurityOption1 `security:"option"`
    Option2 *BigqueryDatasetsGetSecurityOption2 `security:"option"`
    Option3 *BigqueryDatasetsGetSecurityOption3 `security:"option"`
    
}

type BigqueryDatasetsGetRequest struct {
    PathParams BigqueryDatasetsGetPathParams 
    QueryParams BigqueryDatasetsGetQueryParams 
    Security BigqueryDatasetsGetSecurity 
    
}

type BigqueryDatasetsGetResponse struct {
    ContentType string 
    Dataset *shared.Dataset 
    StatusCode int64 
    
}

