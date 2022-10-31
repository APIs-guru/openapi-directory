package operations

import (
"openapi/pkg/models/shared")

type BigqueryDatasetsListPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type BigqueryDatasetsListQueryParams struct {
    All *bool `queryParam:"style=form,explode=true,name=all"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type BigqueryDatasetsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryDatasetsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryDatasetsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryDatasetsListSecurity struct {
    Option1 *BigqueryDatasetsListSecurityOption1 `security:"option"`
    Option2 *BigqueryDatasetsListSecurityOption2 `security:"option"`
    Option3 *BigqueryDatasetsListSecurityOption3 `security:"option"`
    
}

type BigqueryDatasetsListRequest struct {
    PathParams BigqueryDatasetsListPathParams 
    QueryParams BigqueryDatasetsListQueryParams 
    Security BigqueryDatasetsListSecurity 
    
}

type BigqueryDatasetsListResponse struct {
    ContentType string 
    DatasetList *shared.DatasetList 
    StatusCode int64 
    
}

