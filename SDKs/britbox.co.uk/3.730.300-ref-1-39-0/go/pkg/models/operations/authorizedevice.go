package operations

import (
"openapi/pkg/models/shared")

type AuthorizeDeviceQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type AuthorizeDeviceSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type AuthorizeDeviceRequest struct {
    QueryParams AuthorizeDeviceQueryParams 
    Request shared.DeviceAuthorizationCode `request:"mediaType=application/json"`
    Security AuthorizeDeviceSecurity 
    
}

type AuthorizeDeviceResponse struct {
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

