package operations

import (
"openapi/pkg/models/shared")

type GetDevicesQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetDevicesSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type GetDevicesRequest struct {
    QueryParams GetDevicesQueryParams 
    Security GetDevicesSecurity 
    
}

type GetDevicesResponse struct {
    AccountDevices *shared.AccountDevices 
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

