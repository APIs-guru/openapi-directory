package operations

import (
"openapi/pkg/models/shared")

type DeregisterDevicePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeregisterDeviceQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type DeregisterDeviceSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type DeregisterDeviceRequest struct {
    PathParams DeregisterDevicePathParams 
    QueryParams DeregisterDeviceQueryParams 
    Security DeregisterDeviceSecurity 
    
}

type DeregisterDeviceResponse struct {
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

