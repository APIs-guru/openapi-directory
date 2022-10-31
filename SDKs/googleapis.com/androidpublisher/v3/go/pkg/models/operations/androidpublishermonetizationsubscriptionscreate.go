package operations

import (
"openapi/pkg/models/shared")

type AndroidpublisherMonetizationSubscriptionsCreatePathParams struct {
    PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
    
}

type AndroidpublisherMonetizationSubscriptionsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    ProductID *string `queryParam:"style=form,explode=true,name=productId"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RegionsVersionVersion *string `queryParam:"style=form,explode=true,name=regionsVersion.version"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type AndroidpublisherMonetizationSubscriptionsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AndroidpublisherMonetizationSubscriptionsCreateRequest struct {
    PathParams AndroidpublisherMonetizationSubscriptionsCreatePathParams 
    QueryParams AndroidpublisherMonetizationSubscriptionsCreateQueryParams 
    Request *shared.Subscription `request:"mediaType=application/json"`
    Security AndroidpublisherMonetizationSubscriptionsCreateSecurity 
    
}

type AndroidpublisherMonetizationSubscriptionsCreateResponse struct {
    ContentType string 
    StatusCode int64 
    Subscription *shared.Subscription 
    
}

