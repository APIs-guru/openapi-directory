package operations

import (
"openapi/pkg/models/shared")

type DownloadLabelFilePathParams struct {
    ShipmentID string `pathParam:"style=simple,explode=false,name=shipmentId"`
    
}

type DownloadLabelFileSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type DownloadLabelFileRequest struct {
    PathParams DownloadLabelFilePathParams 
    Security DownloadLabelFileSecurity 
    
}

type DownloadLabelFileResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

