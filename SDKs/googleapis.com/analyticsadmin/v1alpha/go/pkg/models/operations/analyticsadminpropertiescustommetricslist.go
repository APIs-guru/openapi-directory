package operations

import (
"openapi/pkg/models/shared")

type AnalyticsadminPropertiesCustomMetricsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type AnalyticsadminPropertiesCustomMetricsListQueryParams struct {
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

type AnalyticsadminPropertiesCustomMetricsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsadminPropertiesCustomMetricsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsadminPropertiesCustomMetricsListSecurity struct {
    Option1 *AnalyticsadminPropertiesCustomMetricsListSecurityOption1 `security:"option"`
    Option2 *AnalyticsadminPropertiesCustomMetricsListSecurityOption2 `security:"option"`
    
}

type AnalyticsadminPropertiesCustomMetricsListRequest struct {
    PathParams AnalyticsadminPropertiesCustomMetricsListPathParams 
    QueryParams AnalyticsadminPropertiesCustomMetricsListQueryParams 
    Security AnalyticsadminPropertiesCustomMetricsListSecurity 
    
}

type AnalyticsadminPropertiesCustomMetricsListResponse struct {
    ContentType string 
    GoogleAnalyticsAdminV1alphaListCustomMetricsResponse *shared.GoogleAnalyticsAdminV1alphaListCustomMetricsResponse 
    StatusCode int64 
    
}

