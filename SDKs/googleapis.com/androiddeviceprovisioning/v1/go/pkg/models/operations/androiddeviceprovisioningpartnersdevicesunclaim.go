package operations

import (
"openapi/pkg/models/shared")

type AndroiddeviceprovisioningPartnersDevicesUnclaimPathParams struct {
    PartnerID string `pathParam:"style=simple,explode=false,name=partnerId"`
    
}

type AndroiddeviceprovisioningPartnersDevicesUnclaimQueryParams struct {
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

type AndroiddeviceprovisioningPartnersDevicesUnclaimRequest struct {
    PathParams AndroiddeviceprovisioningPartnersDevicesUnclaimPathParams 
    QueryParams AndroiddeviceprovisioningPartnersDevicesUnclaimQueryParams 
    Request *shared.UnclaimDeviceRequest `request:"mediaType=application/json"`
    
}

type AndroiddeviceprovisioningPartnersDevicesUnclaimResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

