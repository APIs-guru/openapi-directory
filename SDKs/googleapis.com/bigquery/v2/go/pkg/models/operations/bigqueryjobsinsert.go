package operations

import (
"openapi/pkg/models/shared")

type BigqueryJobsInsertPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type BigqueryJobsInsertQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type BigqueryJobsInsertSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryJobsInsertSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryJobsInsertSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryJobsInsertSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryJobsInsertSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryJobsInsertSecurity struct {
    Option1 *BigqueryJobsInsertSecurityOption1 `security:"option"`
    Option2 *BigqueryJobsInsertSecurityOption2 `security:"option"`
    Option3 *BigqueryJobsInsertSecurityOption3 `security:"option"`
    Option4 *BigqueryJobsInsertSecurityOption4 `security:"option"`
    Option5 *BigqueryJobsInsertSecurityOption5 `security:"option"`
    
}

type BigqueryJobsInsertRequest struct {
    PathParams BigqueryJobsInsertPathParams 
    QueryParams BigqueryJobsInsertQueryParams 
    Request []byte `request:"mediaType=application/octet-stream"`
    Security BigqueryJobsInsertSecurity 
    
}

type BigqueryJobsInsertResponse struct {
    ContentType string 
    Job *shared.Job 
    StatusCode int64 
    
}

