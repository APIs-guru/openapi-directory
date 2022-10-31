package operations

import (
"openapi/pkg/models/shared")


type StartServerXAmzTargetEnum string

const (
    StartServerXAmzTargetEnumTransferServiceStartServer StartServerXAmzTargetEnum = "TransferService.StartServer"
)


type StartServerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartServerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartServerRequest struct {
    Headers StartServerHeaders 
    Request shared.StartServerRequest `request:"mediaType=application/json"`
    
}

type StartServerResponse struct {
    ContentType string 
    InternalServiceError *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

