package operations

import (
"openapi/pkg/models/shared")

type BigqueryDatasetsUpdatePathParams struct {
    DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type BigqueryDatasetsUpdateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type BigqueryDatasetsUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryDatasetsUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryDatasetsUpdateSecurity struct {
    Option1 *BigqueryDatasetsUpdateSecurityOption1 `security:"option"`
    Option2 *BigqueryDatasetsUpdateSecurityOption2 `security:"option"`
    
}

type BigqueryDatasetsUpdateRequest struct {
    PathParams BigqueryDatasetsUpdatePathParams 
    QueryParams BigqueryDatasetsUpdateQueryParams 
    Request *shared.Dataset `request:"mediaType=application/json"`
    Security BigqueryDatasetsUpdateSecurity 
    
}

type BigqueryDatasetsUpdateResponse struct {
    ContentType string 
    Dataset *shared.Dataset 
    StatusCode int64 
    
}

