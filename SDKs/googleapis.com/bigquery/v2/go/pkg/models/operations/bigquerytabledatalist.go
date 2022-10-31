package operations

import (
"openapi/pkg/models/shared")

type BigqueryTabledataListPathParams struct {
    DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    TableID string `pathParam:"style=simple,explode=false,name=tableId"`
    
}

type BigqueryTabledataListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SelectedFields *string `queryParam:"style=form,explode=true,name=selectedFields"`
    StartIndex *string `queryParam:"style=form,explode=true,name=startIndex"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type BigqueryTabledataListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryTabledataListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryTabledataListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryTabledataListSecurity struct {
    Option1 *BigqueryTabledataListSecurityOption1 `security:"option"`
    Option2 *BigqueryTabledataListSecurityOption2 `security:"option"`
    Option3 *BigqueryTabledataListSecurityOption3 `security:"option"`
    
}

type BigqueryTabledataListRequest struct {
    PathParams BigqueryTabledataListPathParams 
    QueryParams BigqueryTabledataListQueryParams 
    Security BigqueryTabledataListSecurity 
    
}

type BigqueryTabledataListResponse struct {
    ContentType string 
    StatusCode int64 
    TableDataList *shared.TableDataList 
    
}

