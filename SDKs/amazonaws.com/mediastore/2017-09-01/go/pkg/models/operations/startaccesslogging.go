package operations

import (
"openapi/pkg/models/shared")


type StartAccessLoggingXAmzTargetEnum string

const (
    StartAccessLoggingXAmzTargetEnumMediaStore20170901StartAccessLogging StartAccessLoggingXAmzTargetEnum = "MediaStore_20170901.StartAccessLogging"
)


type StartAccessLoggingHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartAccessLoggingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartAccessLoggingRequest struct {
    Headers StartAccessLoggingHeaders 
    Request shared.StartAccessLoggingInput `request:"mediaType=application/json"`
    
}

type StartAccessLoggingResponse struct {
    ContainerInUseException *interface{} 
    ContainerNotFoundException *interface{} 
    ContentType string 
    InternalServerError *interface{} 
    StartAccessLoggingOutput map[string]interface{} 
    StatusCode int64 
    
}

