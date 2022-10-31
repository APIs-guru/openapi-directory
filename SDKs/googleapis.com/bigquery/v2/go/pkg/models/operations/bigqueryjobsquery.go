package operations

import (
"openapi/pkg/models/shared")

type BigqueryJobsQueryPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type BigqueryJobsQueryQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type BigqueryJobsQuerySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryJobsQuerySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryJobsQuerySecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryJobsQuerySecurity struct {
    Option1 *BigqueryJobsQuerySecurityOption1 `security:"option"`
    Option2 *BigqueryJobsQuerySecurityOption2 `security:"option"`
    Option3 *BigqueryJobsQuerySecurityOption3 `security:"option"`
    
}

type BigqueryJobsQueryRequest struct {
    PathParams BigqueryJobsQueryPathParams 
    QueryParams BigqueryJobsQueryQueryParams 
    Request *shared.QueryRequest `request:"mediaType=application/json"`
    Security BigqueryJobsQuerySecurity 
    
}

type BigqueryJobsQueryResponse struct {
    ContentType string 
    QueryResponse *shared.QueryResponse 
    StatusCode int64 
    
}

