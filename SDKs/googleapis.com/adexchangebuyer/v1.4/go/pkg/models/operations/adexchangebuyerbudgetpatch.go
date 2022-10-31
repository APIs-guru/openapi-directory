package operations

import (
"openapi/pkg/models/shared")

type AdexchangebuyerBudgetPatchPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    BillingID string `pathParam:"style=simple,explode=false,name=billingId"`
    
}

type AdexchangebuyerBudgetPatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdexchangebuyerBudgetPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdexchangebuyerBudgetPatchRequest struct {
    PathParams AdexchangebuyerBudgetPatchPathParams 
    QueryParams AdexchangebuyerBudgetPatchQueryParams 
    Request *shared.Budget `request:"mediaType=application/json"`
    Security AdexchangebuyerBudgetPatchSecurity 
    
}

type AdexchangebuyerBudgetPatchResponse struct {
    Budget *shared.Budget 
    ContentType string 
    StatusCode int64 
    
}

