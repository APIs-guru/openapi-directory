package operations

import (
"openapi/pkg/models/shared")

type EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams struct {
    PreReceiveEnvironmentID int64 `pathParam:"style=simple,explode=false,name=pre_receive_environment_id"`
    
}

type EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest struct {
    PathParams EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams 
    
}

type EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse struct {
    ContentType string 
    StatusCode int64 
    PreReceiveEnvironmentDownloadStatus *shared.PreReceiveEnvironmentDownloadStatus 
    
}

