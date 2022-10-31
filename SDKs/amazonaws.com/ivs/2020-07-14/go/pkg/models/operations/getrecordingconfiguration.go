package operations

import (
"openapi/pkg/models/shared")

type GetRecordingConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRecordingConfigurationRequestBody struct {
    Arn string `json:"arn"`
    
}

type GetRecordingConfigurationRequest struct {
    Headers GetRecordingConfigurationHeaders 
    Request GetRecordingConfigurationRequestBody `request:"mediaType=application/json"`
    
}

type GetRecordingConfigurationResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetRecordingConfigurationResponse *shared.GetRecordingConfigurationResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

