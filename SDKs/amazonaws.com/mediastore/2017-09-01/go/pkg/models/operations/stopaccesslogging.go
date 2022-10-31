package operations

import (
"openapi/pkg/models/shared")


type StopAccessLoggingXAmzTargetEnum string

const (
    StopAccessLoggingXAmzTargetEnumMediaStore20170901StopAccessLogging StopAccessLoggingXAmzTargetEnum = "MediaStore_20170901.StopAccessLogging"
)


type StopAccessLoggingHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopAccessLoggingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopAccessLoggingRequest struct {
    Headers StopAccessLoggingHeaders 
    Request shared.StopAccessLoggingInput `request:"mediaType=application/json"`
    
}

type StopAccessLoggingResponse struct {
    ContainerInUseException *interface{} 
    ContainerNotFoundException *interface{} 
    ContentType string 
    InternalServerError *interface{} 
    StatusCode int64 
    StopAccessLoggingOutput map[string]interface{} 
    
}

