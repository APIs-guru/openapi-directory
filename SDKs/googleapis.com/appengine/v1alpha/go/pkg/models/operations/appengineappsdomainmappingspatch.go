package operations

import (
"openapi/pkg/models/shared")

type AppengineAppsDomainMappingsPatchPathParams struct {
    AppsID string `pathParam:"style=simple,explode=false,name=appsId"`
    DomainMappingsID string `pathParam:"style=simple,explode=false,name=domainMappingsId"`
    
}

type AppengineAppsDomainMappingsPatchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    NoManagedCertificate *bool `queryParam:"style=form,explode=true,name=noManagedCertificate"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UpdateMask *string `queryParam:"style=form,explode=true,name=updateMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type AppengineAppsDomainMappingsPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsDomainMappingsPatchRequest struct {
    PathParams AppengineAppsDomainMappingsPatchPathParams 
    QueryParams AppengineAppsDomainMappingsPatchQueryParams 
    Request *shared.DomainMapping `request:"mediaType=application/json"`
    Security AppengineAppsDomainMappingsPatchSecurity 
    
}

type AppengineAppsDomainMappingsPatchResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

