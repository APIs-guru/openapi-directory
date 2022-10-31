package operations

import (
"openapi/pkg/models/shared")

type AdmobAccountsMediationReportGeneratePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type AdmobAccountsMediationReportGenerateQueryParams struct {
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

type AdmobAccountsMediationReportGenerateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdmobAccountsMediationReportGenerateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdmobAccountsMediationReportGenerateSecurity struct {
    Option1 *AdmobAccountsMediationReportGenerateSecurityOption1 `security:"option"`
    Option2 *AdmobAccountsMediationReportGenerateSecurityOption2 `security:"option"`
    
}

type AdmobAccountsMediationReportGenerateRequest struct {
    PathParams AdmobAccountsMediationReportGeneratePathParams 
    QueryParams AdmobAccountsMediationReportGenerateQueryParams 
    Request *shared.GenerateMediationReportRequest `request:"mediaType=application/json"`
    Security AdmobAccountsMediationReportGenerateSecurity 
    
}

type AdmobAccountsMediationReportGenerateResponse struct {
    ContentType string 
    GenerateMediationReportResponse *shared.GenerateMediationReportResponse 
    StatusCode int64 
    
}

