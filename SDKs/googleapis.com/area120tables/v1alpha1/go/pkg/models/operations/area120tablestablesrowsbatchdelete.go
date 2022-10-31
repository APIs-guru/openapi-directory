package operations

import (
"openapi/pkg/models/shared")

type Area120tablesTablesRowsBatchDeletePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type Area120tablesTablesRowsBatchDeleteQueryParams struct {
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

type Area120tablesTablesRowsBatchDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesTablesRowsBatchDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesTablesRowsBatchDeleteSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesTablesRowsBatchDeleteSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesTablesRowsBatchDeleteSecurity struct {
    Option1 *Area120tablesTablesRowsBatchDeleteSecurityOption1 `security:"option"`
    Option2 *Area120tablesTablesRowsBatchDeleteSecurityOption2 `security:"option"`
    Option3 *Area120tablesTablesRowsBatchDeleteSecurityOption3 `security:"option"`
    Option4 *Area120tablesTablesRowsBatchDeleteSecurityOption4 `security:"option"`
    
}

type Area120tablesTablesRowsBatchDeleteRequest struct {
    PathParams Area120tablesTablesRowsBatchDeletePathParams 
    QueryParams Area120tablesTablesRowsBatchDeleteQueryParams 
    Request *shared.BatchDeleteRowsRequest `request:"mediaType=application/json"`
    Security Area120tablesTablesRowsBatchDeleteSecurity 
    
}

type Area120tablesTablesRowsBatchDeleteResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

