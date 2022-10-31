package operations

import (
"openapi/pkg/models/shared")

type BigqueryJobsDeletePathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type BigqueryJobsDeleteQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Location *string `queryParam:"style=form,explode=true,name=location"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type BigqueryJobsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryJobsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryJobsDeleteSecurity struct {
    Option1 *BigqueryJobsDeleteSecurityOption1 `security:"option"`
    Option2 *BigqueryJobsDeleteSecurityOption2 `security:"option"`
    
}

type BigqueryJobsDeleteRequest struct {
    PathParams BigqueryJobsDeletePathParams 
    QueryParams BigqueryJobsDeleteQueryParams 
    Security BigqueryJobsDeleteSecurity 
    
}

type BigqueryJobsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

