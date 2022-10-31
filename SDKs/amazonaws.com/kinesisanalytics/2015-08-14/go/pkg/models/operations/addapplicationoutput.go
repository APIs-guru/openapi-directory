package operations

import (
"openapi/pkg/models/shared")


type AddApplicationOutputXAmzTargetEnum string

const (
    AddApplicationOutputXAmzTargetEnumKinesisAnalytics20150814AddApplicationOutput AddApplicationOutputXAmzTargetEnum = "KinesisAnalytics_20150814.AddApplicationOutput"
)


type AddApplicationOutputHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AddApplicationOutputXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AddApplicationOutputRequest struct {
    Headers AddApplicationOutputHeaders 
    Request shared.AddApplicationOutputRequest `request:"mediaType=application/json"`
    
}

type AddApplicationOutputResponse struct {
    AddApplicationOutputResponse map[string]interface{} 
    ConcurrentModificationException *interface{} 
    ContentType string 
    InvalidArgumentException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

