package operations

import (
"openapi/pkg/models/shared")

type BigqueryTablesGetIamPolicyPathParams struct {
    Resource string `pathParam:"style=simple,explode=false,name=resource"`
    
}

type BigqueryTablesGetIamPolicyQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type BigqueryTablesGetIamPolicySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryTablesGetIamPolicySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryTablesGetIamPolicySecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigqueryTablesGetIamPolicySecurity struct {
    Option1 *BigqueryTablesGetIamPolicySecurityOption1 `security:"option"`
    Option2 *BigqueryTablesGetIamPolicySecurityOption2 `security:"option"`
    Option3 *BigqueryTablesGetIamPolicySecurityOption3 `security:"option"`
    
}

type BigqueryTablesGetIamPolicyRequest struct {
    PathParams BigqueryTablesGetIamPolicyPathParams 
    QueryParams BigqueryTablesGetIamPolicyQueryParams 
    Request *shared.GetIamPolicyRequest `request:"mediaType=application/json"`
    Security BigqueryTablesGetIamPolicySecurity 
    
}

type BigqueryTablesGetIamPolicyResponse struct {
    ContentType string 
    Policy *shared.Policy 
    StatusCode int64 
    
}

