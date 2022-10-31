package operations

import (
"openapi/pkg/models/shared")

type AdsenseAccountsAlertsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type AdsenseAccountsAlertsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LanguageCode *string `queryParam:"style=form,explode=true,name=languageCode"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type AdsenseAccountsAlertsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsAlertsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsAlertsListSecurity struct {
    Option1 *AdsenseAccountsAlertsListSecurityOption1 `security:"option"`
    Option2 *AdsenseAccountsAlertsListSecurityOption2 `security:"option"`
    
}

type AdsenseAccountsAlertsListRequest struct {
    PathParams AdsenseAccountsAlertsListPathParams 
    QueryParams AdsenseAccountsAlertsListQueryParams 
    Security AdsenseAccountsAlertsListSecurity 
    
}

type AdsenseAccountsAlertsListResponse struct {
    ContentType string 
    ListAlertsResponse *shared.ListAlertsResponse 
    StatusCode int64 
    
}

