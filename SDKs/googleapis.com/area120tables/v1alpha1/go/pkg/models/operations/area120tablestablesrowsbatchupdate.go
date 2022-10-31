package operations

import (
"openapi/pkg/models/shared")

type Area120tablesTablesRowsBatchUpdatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type Area120tablesTablesRowsBatchUpdateQueryParams struct {
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

type Area120tablesTablesRowsBatchUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesTablesRowsBatchUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesTablesRowsBatchUpdateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesTablesRowsBatchUpdateSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesTablesRowsBatchUpdateSecurity struct {
    Option1 *Area120tablesTablesRowsBatchUpdateSecurityOption1 `security:"option"`
    Option2 *Area120tablesTablesRowsBatchUpdateSecurityOption2 `security:"option"`
    Option3 *Area120tablesTablesRowsBatchUpdateSecurityOption3 `security:"option"`
    Option4 *Area120tablesTablesRowsBatchUpdateSecurityOption4 `security:"option"`
    
}

type Area120tablesTablesRowsBatchUpdateRequest struct {
    PathParams Area120tablesTablesRowsBatchUpdatePathParams 
    QueryParams Area120tablesTablesRowsBatchUpdateQueryParams 
    Request *shared.BatchUpdateRowsRequest `request:"mediaType=application/json"`
    Security Area120tablesTablesRowsBatchUpdateSecurity 
    
}

type Area120tablesTablesRowsBatchUpdateResponse struct {
    BatchUpdateRowsResponse *shared.BatchUpdateRowsResponse 
    ContentType string 
    StatusCode int64 
    
}

