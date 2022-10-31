package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementUploadsDeleteUploadDataPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    CustomDataSourceID string `pathParam:"style=simple,explode=false,name=customDataSourceId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementUploadsDeleteUploadDataQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsManagementUploadsDeleteUploadDataSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementUploadsDeleteUploadDataSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementUploadsDeleteUploadDataSecurity struct {
    Option1 *AnalyticsManagementUploadsDeleteUploadDataSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementUploadsDeleteUploadDataSecurityOption2 `security:"option"`
    
}

type AnalyticsManagementUploadsDeleteUploadDataRequest struct {
    PathParams AnalyticsManagementUploadsDeleteUploadDataPathParams 
    QueryParams AnalyticsManagementUploadsDeleteUploadDataQueryParams 
    Request *shared.AnalyticsDataimportDeleteUploadDataRequest `request:"mediaType=application/json"`
    Security AnalyticsManagementUploadsDeleteUploadDataSecurity 
    
}

type AnalyticsManagementUploadsDeleteUploadDataResponse struct {
    ContentType string 
    StatusCode int64 
    
}

