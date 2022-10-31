package operations

import (
"openapi/pkg/models/shared")

type AnalyticsMetadataColumnsListPathParams struct {
    ReportType string `pathParam:"style=simple,explode=false,name=reportType"`
    
}

type AnalyticsMetadataColumnsListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsMetadataColumnsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsMetadataColumnsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsMetadataColumnsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsMetadataColumnsListSecurity struct {
    Option1 *AnalyticsMetadataColumnsListSecurityOption1 `security:"option"`
    Option2 *AnalyticsMetadataColumnsListSecurityOption2 `security:"option"`
    Option3 *AnalyticsMetadataColumnsListSecurityOption3 `security:"option"`
    
}

type AnalyticsMetadataColumnsListRequest struct {
    PathParams AnalyticsMetadataColumnsListPathParams 
    QueryParams AnalyticsMetadataColumnsListQueryParams 
    Security AnalyticsMetadataColumnsListSecurity 
    
}

type AnalyticsMetadataColumnsListResponse struct {
    Columns *shared.Columns 
    ContentType string 
    StatusCode int64 
    
}

