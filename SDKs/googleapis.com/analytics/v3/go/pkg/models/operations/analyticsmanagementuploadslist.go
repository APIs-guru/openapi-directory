package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementUploadsListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    CustomDataSourceID string `pathParam:"style=simple,explode=false,name=customDataSourceId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementUploadsListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=max-results"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StartIndex *int64 `queryParam:"style=form,explode=true,name=start-index"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsManagementUploadsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementUploadsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementUploadsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementUploadsListSecurity struct {
    Option1 *AnalyticsManagementUploadsListSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementUploadsListSecurityOption2 `security:"option"`
    Option3 *AnalyticsManagementUploadsListSecurityOption3 `security:"option"`
    
}

type AnalyticsManagementUploadsListRequest struct {
    PathParams AnalyticsManagementUploadsListPathParams 
    QueryParams AnalyticsManagementUploadsListQueryParams 
    Security AnalyticsManagementUploadsListSecurity 
    
}

type AnalyticsManagementUploadsListResponse struct {
    ContentType string 
    StatusCode int64 
    Uploads *shared.Uploads 
    
}

