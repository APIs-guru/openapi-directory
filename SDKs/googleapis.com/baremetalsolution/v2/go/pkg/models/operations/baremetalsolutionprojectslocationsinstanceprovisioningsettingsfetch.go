package operations

import (
"openapi/pkg/models/shared")

type BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchPathParams struct {
    Location string `pathParam:"style=simple,explode=false,name=location"`
    
}

type BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchQueryParams struct {
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

type BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest struct {
    PathParams BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchPathParams 
    QueryParams BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchQueryParams 
    Security BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity 
    
}

type BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse struct {
    ContentType string 
    FetchInstanceProvisioningSettingsResponse *shared.FetchInstanceProvisioningSettingsResponse 
    StatusCode int64 
    
}

