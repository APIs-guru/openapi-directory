package operations

import (
"openapi/pkg/models/shared")

type BigqueryModelsDeletePathParams struct {
    DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
    ModelID string `pathParam:"style=simple,explode=false,name=modelId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type BigqueryModelsDeleteQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type BigqueryModelsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryModelsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryModelsDeleteSecurity struct {
    Option1 *BigqueryModelsDeleteSecurityOption1 `security:"option"`
    Option2 *BigqueryModelsDeleteSecurityOption2 `security:"option"`
    
}

type BigqueryModelsDeleteRequest struct {
    PathParams BigqueryModelsDeletePathParams 
    QueryParams BigqueryModelsDeleteQueryParams 
    Security BigqueryModelsDeleteSecurity 
    
}

type BigqueryModelsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

