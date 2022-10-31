package operations

import (
"openapi/pkg/models/shared")

type GetDevicePositionPathParams struct {
    DeviceID string `pathParam:"style=simple,explode=false,name=DeviceId"`
    TrackerName string `pathParam:"style=simple,explode=false,name=TrackerName"`
    
}

type GetDevicePositionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDevicePositionRequest struct {
    PathParams GetDevicePositionPathParams 
    Headers GetDevicePositionHeaders 
    
}

type GetDevicePositionResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetDevicePositionResponse *shared.GetDevicePositionResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

