package operations

import (
"openapi/pkg/models/shared")

type AnalyticsadminPropertiesUserLinksAuditPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type AnalyticsadminPropertiesUserLinksAuditQueryParams struct {
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

type AnalyticsadminPropertiesUserLinksAuditSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsadminPropertiesUserLinksAuditSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsadminPropertiesUserLinksAuditSecurity struct {
    Option1 *AnalyticsadminPropertiesUserLinksAuditSecurityOption1 `security:"option"`
    Option2 *AnalyticsadminPropertiesUserLinksAuditSecurityOption2 `security:"option"`
    
}

type AnalyticsadminPropertiesUserLinksAuditRequest struct {
    PathParams AnalyticsadminPropertiesUserLinksAuditPathParams 
    QueryParams AnalyticsadminPropertiesUserLinksAuditQueryParams 
    Request *shared.GoogleAnalyticsAdminV1alphaAuditUserLinksRequest `request:"mediaType=application/json"`
    Security AnalyticsadminPropertiesUserLinksAuditSecurity 
    
}

type AnalyticsadminPropertiesUserLinksAuditResponse struct {
    ContentType string 
    GoogleAnalyticsAdminV1alphaAuditUserLinksResponse *shared.GoogleAnalyticsAdminV1alphaAuditUserLinksResponse 
    StatusCode int64 
    
}

