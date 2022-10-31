package operations

import (
"openapi/pkg/models/shared")


type AddApplicationInputProcessingConfigurationXAmzTargetEnum string

const (
    AddApplicationInputProcessingConfigurationXAmzTargetEnumKinesisAnalytics20150814AddApplicationInputProcessingConfiguration AddApplicationInputProcessingConfigurationXAmzTargetEnum = "KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration"
)


type AddApplicationInputProcessingConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AddApplicationInputProcessingConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AddApplicationInputProcessingConfigurationRequest struct {
    Headers AddApplicationInputProcessingConfigurationHeaders 
    Request shared.AddApplicationInputProcessingConfigurationRequest `request:"mediaType=application/json"`
    
}

type AddApplicationInputProcessingConfigurationResponse struct {
    AddApplicationInputProcessingConfigurationResponse map[string]interface{} 
    ConcurrentModificationException *interface{} 
    ContentType string 
    InvalidArgumentException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

