package operations

import (
"openapi/pkg/models/shared")

type AppengineAppsServicesPatchPathParams struct {
    AppsID string `pathParam:"style=simple,explode=false,name=appsId"`
    ServicesID string `pathParam:"style=simple,explode=false,name=servicesId"`
    
}

type AppengineAppsServicesPatchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MigrateTraffic *bool `queryParam:"style=form,explode=true,name=migrateTraffic"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UpdateMask *string `queryParam:"style=form,explode=true,name=updateMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type AppengineAppsServicesPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsServicesPatchRequest struct {
    PathParams AppengineAppsServicesPatchPathParams 
    QueryParams AppengineAppsServicesPatchQueryParams 
    Request *shared.Service `request:"mediaType=application/json"`
    Security AppengineAppsServicesPatchSecurity 
    
}

type AppengineAppsServicesPatchResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

