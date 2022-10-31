package operations

import (
"openapi/pkg/models/shared")

type Area120tablesTablesRowsPatchPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}


type Area120tablesTablesRowsPatchViewEnum string

const (
    Area120tablesTablesRowsPatchViewEnumViewUnspecified Area120tablesTablesRowsPatchViewEnum = "VIEW_UNSPECIFIED"
Area120tablesTablesRowsPatchViewEnumColumnIDView Area120tablesTablesRowsPatchViewEnum = "COLUMN_ID_VIEW"
)


type Area120tablesTablesRowsPatchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UpdateMask *string `queryParam:"style=form,explode=true,name=updateMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *Area120tablesTablesRowsPatchViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type Area120tablesTablesRowsPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesTablesRowsPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesTablesRowsPatchSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesTablesRowsPatchSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Area120tablesTablesRowsPatchSecurity struct {
    Option1 *Area120tablesTablesRowsPatchSecurityOption1 `security:"option"`
    Option2 *Area120tablesTablesRowsPatchSecurityOption2 `security:"option"`
    Option3 *Area120tablesTablesRowsPatchSecurityOption3 `security:"option"`
    Option4 *Area120tablesTablesRowsPatchSecurityOption4 `security:"option"`
    
}

type Area120tablesTablesRowsPatchRequest struct {
    PathParams Area120tablesTablesRowsPatchPathParams 
    QueryParams Area120tablesTablesRowsPatchQueryParams 
    Request *shared.Row `request:"mediaType=application/json"`
    Security Area120tablesTablesRowsPatchSecurity 
    
}

type Area120tablesTablesRowsPatchResponse struct {
    ContentType string 
    Row *shared.Row 
    StatusCode int64 
    
}

