package operations

import (
"openapi/pkg/models/shared")

type BigqueryJobsCancelPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type BigqueryJobsCancelQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Location *string `queryParam:"style=form,explode=true,name=location"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type BigqueryJobsCancelSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryJobsCancelSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryJobsCancelSecurity struct {
    Option1 *BigqueryJobsCancelSecurityOption1 `security:"option"`
    Option2 *BigqueryJobsCancelSecurityOption2 `security:"option"`
    
}

type BigqueryJobsCancelRequest struct {
    PathParams BigqueryJobsCancelPathParams 
    QueryParams BigqueryJobsCancelQueryParams 
    Security BigqueryJobsCancelSecurity 
    
}

type BigqueryJobsCancelResponse struct {
    ContentType string 
    JobCancelResponse *shared.JobCancelResponse 
    StatusCode int64 
    
}

