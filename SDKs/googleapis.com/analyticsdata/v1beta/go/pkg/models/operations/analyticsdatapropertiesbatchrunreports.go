package operations

import (
"openapi/pkg/models/shared")

type AnalyticsdataPropertiesBatchRunReportsPathParams struct {
    Property string `pathParam:"style=simple,explode=false,name=property"`
    
}

type AnalyticsdataPropertiesBatchRunReportsQueryParams struct {
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

type AnalyticsdataPropertiesBatchRunReportsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsdataPropertiesBatchRunReportsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsdataPropertiesBatchRunReportsSecurity struct {
    Option1 *AnalyticsdataPropertiesBatchRunReportsSecurityOption1 `security:"option"`
    Option2 *AnalyticsdataPropertiesBatchRunReportsSecurityOption2 `security:"option"`
    
}

type AnalyticsdataPropertiesBatchRunReportsRequest struct {
    PathParams AnalyticsdataPropertiesBatchRunReportsPathParams 
    QueryParams AnalyticsdataPropertiesBatchRunReportsQueryParams 
    Request *shared.BatchRunReportsRequest `request:"mediaType=application/json"`
    Security AnalyticsdataPropertiesBatchRunReportsSecurity 
    
}

type AnalyticsdataPropertiesBatchRunReportsResponse struct {
    BatchRunReportsResponse *shared.BatchRunReportsResponse 
    ContentType string 
    StatusCode int64 
    
}

