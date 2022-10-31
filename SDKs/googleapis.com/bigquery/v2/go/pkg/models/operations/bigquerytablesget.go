package operations

import (
"openapi/pkg/models/shared")

type BigqueryTablesGetPathParams struct {
    DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    TableID string `pathParam:"style=simple,explode=false,name=tableId"`
    
}


type BigqueryTablesGetViewEnum string

const (
    BigqueryTablesGetViewEnumBasic BigqueryTablesGetViewEnum = "BASIC"
BigqueryTablesGetViewEnumFull BigqueryTablesGetViewEnum = "FULL"
BigqueryTablesGetViewEnumStorageStats BigqueryTablesGetViewEnum = "STORAGE_STATS"
BigqueryTablesGetViewEnumTableMetadataViewUnspecified BigqueryTablesGetViewEnum = "TABLE_METADATA_VIEW_UNSPECIFIED"
)


type BigqueryTablesGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SelectedFields *string `queryParam:"style=form,explode=true,name=selectedFields"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    View *BigqueryTablesGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type BigqueryTablesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryTablesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryTablesGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryTablesGetSecurity struct {
    Option1 *BigqueryTablesGetSecurityOption1 `security:"option"`
    Option2 *BigqueryTablesGetSecurityOption2 `security:"option"`
    Option3 *BigqueryTablesGetSecurityOption3 `security:"option"`
    
}

type BigqueryTablesGetRequest struct {
    PathParams BigqueryTablesGetPathParams 
    QueryParams BigqueryTablesGetQueryParams 
    Security BigqueryTablesGetSecurity 
    
}

type BigqueryTablesGetResponse struct {
    ContentType string 
    StatusCode int64 
    Table *shared.Table 
    
}

