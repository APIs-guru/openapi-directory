package operations

import (
"openapi/pkg/models/shared")

type AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesPathParams struct {
    BasePlanID string `pathParam:"style=simple,explode=false,name=basePlanId"`
    PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
    ProductID string `pathParam:"style=simple,explode=false,name=productId"`
    
}

type AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesRequest struct {
    PathParams AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesPathParams 
    QueryParams AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesQueryParams 
    Request *shared.MigrateBasePlanPricesRequest `request:"mediaType=application/json"`
    Security AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesSecurity 
    
}

type AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesResponse struct {
    ContentType string 
    MigrateBasePlanPricesResponse map[string]interface{} 
    StatusCode int64 
    
}

