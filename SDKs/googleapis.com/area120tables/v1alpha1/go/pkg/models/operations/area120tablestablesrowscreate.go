package operations

import (
"openapi/pkg/models/shared")

type Area120tablesTablesRowsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type Area120tablesTablesRowsCreateViewEnum string

const (
    Area120tablesTablesRowsCreateViewEnumViewUnspecified Area120tablesTablesRowsCreateViewEnum = "VIEW_UNSPECIFIED"
Area120tablesTablesRowsCreateViewEnumColumnIDView Area120tablesTablesRowsCreateViewEnum = "COLUMN_ID_VIEW"
)


type Area120tablesTablesRowsCreateQueryParams struct {
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
    View *Area120tablesTablesRowsCreateViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type Area120tablesTablesRowsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesTablesRowsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesTablesRowsCreateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesTablesRowsCreateSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesTablesRowsCreateSecurity struct {
    Option1 *Area120tablesTablesRowsCreateSecurityOption1 `security:"option"`
    Option2 *Area120tablesTablesRowsCreateSecurityOption2 `security:"option"`
    Option3 *Area120tablesTablesRowsCreateSecurityOption3 `security:"option"`
    Option4 *Area120tablesTablesRowsCreateSecurityOption4 `security:"option"`
    
}

type Area120tablesTablesRowsCreateRequest struct {
    PathParams Area120tablesTablesRowsCreatePathParams 
    QueryParams Area120tablesTablesRowsCreateQueryParams 
    Request *shared.Row `request:"mediaType=application/json"`
    Security Area120tablesTablesRowsCreateSecurity 
    
}

type Area120tablesTablesRowsCreateResponse struct {
    ContentType string 
    Row *shared.Row 
    StatusCode int64 
    
}

