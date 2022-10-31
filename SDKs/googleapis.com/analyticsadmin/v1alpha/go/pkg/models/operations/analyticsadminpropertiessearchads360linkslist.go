package operations

import (
"openapi/pkg/models/shared")

type AnalyticsadminPropertiesSearchAds360LinksListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type AnalyticsadminPropertiesSearchAds360LinksListQueryParams struct {
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

type AnalyticsadminPropertiesSearchAds360LinksListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsadminPropertiesSearchAds360LinksListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsadminPropertiesSearchAds360LinksListSecurity struct {
    Option1 *AnalyticsadminPropertiesSearchAds360LinksListSecurityOption1 `security:"option"`
    Option2 *AnalyticsadminPropertiesSearchAds360LinksListSecurityOption2 `security:"option"`
    
}

type AnalyticsadminPropertiesSearchAds360LinksListRequest struct {
    PathParams AnalyticsadminPropertiesSearchAds360LinksListPathParams 
    QueryParams AnalyticsadminPropertiesSearchAds360LinksListQueryParams 
    Security AnalyticsadminPropertiesSearchAds360LinksListSecurity 
    
}

type AnalyticsadminPropertiesSearchAds360LinksListResponse struct {
    ContentType string 
    GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse *shared.GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse 
    StatusCode int64 
    
}

