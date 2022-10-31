package operations

import (
"openapi/pkg/models/shared")

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurity struct {
    Option1 *AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption1 `security:"option"`
    Option2 *AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption2 `security:"option"`
    
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest struct {
    PathParams AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListPathParams 
    QueryParams AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListQueryParams 
    Security AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurity 
    
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse struct {
    ContentType string 
    GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse *shared.GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse 
    StatusCode int64 
    
}

