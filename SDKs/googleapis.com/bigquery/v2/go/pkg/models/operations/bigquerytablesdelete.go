package operations

import (
"openapi/pkg/models/shared")

type BigqueryTablesDeletePathParams struct {
    DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    TableID string `pathParam:"style=simple,explode=false,name=tableId"`
    
}

type BigqueryTablesDeleteQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type BigqueryTablesDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryTablesDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryTablesDeleteSecurity struct {
    Option1 *BigqueryTablesDeleteSecurityOption1 `security:"option"`
    Option2 *BigqueryTablesDeleteSecurityOption2 `security:"option"`
    
}

type BigqueryTablesDeleteRequest struct {
    PathParams BigqueryTablesDeletePathParams 
    QueryParams BigqueryTablesDeleteQueryParams 
    Security BigqueryTablesDeleteSecurity 
    
}

type BigqueryTablesDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

