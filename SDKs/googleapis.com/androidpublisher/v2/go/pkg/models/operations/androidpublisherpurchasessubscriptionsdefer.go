package operations

import (
"openapi/pkg/models/shared")

type AndroidpublisherPurchasesSubscriptionsDeferPathParams struct {
    PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
    SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
    Token string `pathParam:"style=simple,explode=false,name=token"`
    
}

type AndroidpublisherPurchasesSubscriptionsDeferQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AndroidpublisherPurchasesSubscriptionsDeferSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AndroidpublisherPurchasesSubscriptionsDeferRequest struct {
    PathParams AndroidpublisherPurchasesSubscriptionsDeferPathParams 
    QueryParams AndroidpublisherPurchasesSubscriptionsDeferQueryParams 
    Request *shared.SubscriptionPurchasesDeferRequest `request:"mediaType=application/json"`
    Security AndroidpublisherPurchasesSubscriptionsDeferSecurity 
    
}

type AndroidpublisherPurchasesSubscriptionsDeferResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

