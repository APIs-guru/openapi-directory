package operations

import (
"openapi/pkg/models/shared")


type StopApplicationXAmzTargetEnum string

const (
    StopApplicationXAmzTargetEnumKinesisAnalytics20150814StopApplication StopApplicationXAmzTargetEnum = "KinesisAnalytics_20150814.StopApplication"
)


type StopApplicationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopApplicationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopApplicationRequest struct {
    Headers StopApplicationHeaders 
    Request shared.StopApplicationRequest `request:"mediaType=application/json"`
    
}

type StopApplicationResponse struct {
    ContentType string 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    StopApplicationResponse map[string]interface{} 
    UnsupportedOperationException *interface{} 
    
}

