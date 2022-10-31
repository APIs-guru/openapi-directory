package operations

import (
"openapi/pkg/models/shared")

type ResendFailedIpnHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type ResendFailedIpnRequest struct {
    Headers ResendFailedIpnHeaders 
    Request shared.ResendFailedIpnRequest `request:"mediaType=application/json"`
    
}

type ResendFailedIpnResponse struct {
    ContentType string 
    StatusCode int64 
    ResendFailedIpn *shared.ResendFailedIpn 
    
}

