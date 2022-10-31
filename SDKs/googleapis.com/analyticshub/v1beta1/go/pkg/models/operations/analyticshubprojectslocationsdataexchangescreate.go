package operations

import (
"openapi/pkg/models/shared")

type AnalyticshubProjectsLocationsDataExchangesCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type AnalyticshubProjectsLocationsDataExchangesCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DataExchangeID *string `queryParam:"style=form,explode=true,name=dataExchangeId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticshubProjectsLocationsDataExchangesCreateSecurity struct {
    Option1 *AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption1 `security:"option"`
    Option2 *AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption2 `security:"option"`
    
}

type AnalyticshubProjectsLocationsDataExchangesCreateRequest struct {
    PathParams AnalyticshubProjectsLocationsDataExchangesCreatePathParams 
    QueryParams AnalyticshubProjectsLocationsDataExchangesCreateQueryParams 
    Request *shared.DataExchange `request:"mediaType=application/json"`
    Security AnalyticshubProjectsLocationsDataExchangesCreateSecurity 
    
}

type AnalyticshubProjectsLocationsDataExchangesCreateResponse struct {
    ContentType string 
    DataExchange *shared.DataExchange 
    StatusCode int64 
    
}

