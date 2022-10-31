package operations

import (
"openapi/pkg/models/shared")

type BigqueryTabledataInsertAllPathParams struct {
    DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    TableID string `pathParam:"style=simple,explode=false,name=tableId"`
    
}

type BigqueryTabledataInsertAllQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type BigqueryTabledataInsertAllSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryTabledataInsertAllSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryTabledataInsertAllSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryTabledataInsertAllSecurity struct {
    Option1 *BigqueryTabledataInsertAllSecurityOption1 `security:"option"`
    Option2 *BigqueryTabledataInsertAllSecurityOption2 `security:"option"`
    Option3 *BigqueryTabledataInsertAllSecurityOption3 `security:"option"`
    
}

type BigqueryTabledataInsertAllRequest struct {
    PathParams BigqueryTabledataInsertAllPathParams 
    QueryParams BigqueryTabledataInsertAllQueryParams 
    Request *shared.TableDataInsertAllRequest `request:"mediaType=application/json"`
    Security BigqueryTabledataInsertAllSecurity 
    
}

type BigqueryTabledataInsertAllResponse struct {
    ContentType string 
    StatusCode int64 
    TableDataInsertAllResponse *shared.TableDataInsertAllResponse 
    
}

