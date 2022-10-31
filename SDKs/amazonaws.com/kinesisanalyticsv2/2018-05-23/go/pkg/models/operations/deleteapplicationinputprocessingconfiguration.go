package operations

import (
"openapi/pkg/models/shared")


type DeleteApplicationInputProcessingConfigurationXAmzTargetEnum string

const (
    DeleteApplicationInputProcessingConfigurationXAmzTargetEnumKinesisAnalytics20180523DeleteApplicationInputProcessingConfiguration DeleteApplicationInputProcessingConfigurationXAmzTargetEnum = "KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration"
)


type DeleteApplicationInputProcessingConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteApplicationInputProcessingConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteApplicationInputProcessingConfigurationRequest struct {
    Headers DeleteApplicationInputProcessingConfigurationHeaders 
    Request shared.DeleteApplicationInputProcessingConfigurationRequest `request:"mediaType=application/json"`
    
}

type DeleteApplicationInputProcessingConfigurationResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    DeleteApplicationInputProcessingConfigurationResponse *shared.DeleteApplicationInputProcessingConfigurationResponse 
    InvalidArgumentException *interface{} 
    InvalidRequestException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

