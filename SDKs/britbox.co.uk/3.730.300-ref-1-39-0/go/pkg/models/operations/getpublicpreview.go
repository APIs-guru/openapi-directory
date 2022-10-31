package operations

import (
"openapi/pkg/models/shared")

type GetPublicPreviewResponse struct {
    ContentType string 
    SamsungPreview *shared.SamsungPreview 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

