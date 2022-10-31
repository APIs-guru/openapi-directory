package operations

import (
"openapi/pkg/models/shared")

type AnalyticsProvisioningCreateAccountTicketQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsProvisioningCreateAccountTicketSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsProvisioningCreateAccountTicketRequest struct {
    QueryParams AnalyticsProvisioningCreateAccountTicketQueryParams 
    Request *shared.AccountTicket `request:"mediaType=application/json"`
    Security AnalyticsProvisioningCreateAccountTicketSecurity 
    
}

type AnalyticsProvisioningCreateAccountTicketResponse struct {
    AccountTicket *shared.AccountTicket 
    ContentType string 
    StatusCode int64 
    
}

