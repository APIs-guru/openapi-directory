package operations

import (
"openapi/pkg/models/shared")


type StartApplicationXAmzTargetEnum string

const (
    StartApplicationXAmzTargetEnumKinesisAnalytics20180523StartApplication StartApplicationXAmzTargetEnum = "KinesisAnalytics_20180523.StartApplication"
)


type StartApplicationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartApplicationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartApplicationRequest struct {
    Headers StartApplicationHeaders 
    Request shared.StartApplicationRequest `request:"mediaType=application/json"`
    
}

type StartApplicationResponse struct {
    ContentType string 
    InvalidApplicationConfigurationException *interface{} 
    InvalidArgumentException *interface{} 
    InvalidRequestException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StartApplicationResponse map[string]interface{} 
    StatusCode int64 
    
}

