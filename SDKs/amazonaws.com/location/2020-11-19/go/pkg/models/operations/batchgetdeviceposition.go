package operations

import (
"openapi/pkg/models/shared")

type BatchGetDevicePositionPathParams struct {
    TrackerName string `pathParam:"style=simple,explode=false,name=TrackerName"`
    
}

type BatchGetDevicePositionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type BatchGetDevicePositionRequestBody struct {
    DeviceIds []string `json:"DeviceIds"`
    
}

type BatchGetDevicePositionRequest struct {
    PathParams BatchGetDevicePositionPathParams 
    Headers BatchGetDevicePositionHeaders 
    Request BatchGetDevicePositionRequestBody `request:"mediaType=application/json"`
    
}

type BatchGetDevicePositionResponse struct {
    AccessDeniedException *interface{} 
    BatchGetDevicePositionResponse *shared.BatchGetDevicePositionResponse 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

