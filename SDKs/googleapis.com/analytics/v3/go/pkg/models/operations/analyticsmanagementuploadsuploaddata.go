package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementUploadsUploadDataPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    CustomDataSourceID string `pathParam:"style=simple,explode=false,name=customDataSourceId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementUploadsUploadDataQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsManagementUploadsUploadDataSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementUploadsUploadDataSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementUploadsUploadDataSecurity struct {
    Option1 *AnalyticsManagementUploadsUploadDataSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementUploadsUploadDataSecurityOption2 `security:"option"`
    
}

type AnalyticsManagementUploadsUploadDataRequest struct {
    PathParams AnalyticsManagementUploadsUploadDataPathParams 
    QueryParams AnalyticsManagementUploadsUploadDataQueryParams 
    Security AnalyticsManagementUploadsUploadDataSecurity 
    
}

type AnalyticsManagementUploadsUploadDataResponse struct {
    ContentType string 
    StatusCode int64 
    Upload *shared.Upload 
    
}

