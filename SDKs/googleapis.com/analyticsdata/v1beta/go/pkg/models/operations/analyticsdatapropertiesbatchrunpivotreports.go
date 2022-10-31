package operations

import (
"openapi/pkg/models/shared")

type AnalyticsdataPropertiesBatchRunPivotReportsPathParams struct {
    Property string `pathParam:"style=simple,explode=false,name=property"`
    
}

type AnalyticsdataPropertiesBatchRunPivotReportsQueryParams struct {
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

type AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsdataPropertiesBatchRunPivotReportsSecurity struct {
    Option1 *AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1 `security:"option"`
    Option2 *AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption2 `security:"option"`
    
}

type AnalyticsdataPropertiesBatchRunPivotReportsRequest struct {
    PathParams AnalyticsdataPropertiesBatchRunPivotReportsPathParams 
    QueryParams AnalyticsdataPropertiesBatchRunPivotReportsQueryParams 
    Request *shared.BatchRunPivotReportsRequest `request:"mediaType=application/json"`
    Security AnalyticsdataPropertiesBatchRunPivotReportsSecurity 
    
}

type AnalyticsdataPropertiesBatchRunPivotReportsResponse struct {
    BatchRunPivotReportsResponse *shared.BatchRunPivotReportsResponse 
    ContentType string 
    StatusCode int64 
    
}

