package operations

import (
"openapi/pkg/models/shared")


type CreateStreamXAmzTargetEnum string

const (
    CreateStreamXAmzTargetEnumKinesis20131202CreateStream CreateStreamXAmzTargetEnum = "Kinesis_20131202.CreateStream"
)


type CreateStreamHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateStreamXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateStreamRequest struct {
    Headers CreateStreamHeaders 
    Request shared.CreateStreamInput `request:"mediaType=application/json"`
    
}

type CreateStreamResponse struct {
    ContentType string 
    InvalidArgumentException *interface{} 
    LimitExceededException *interface{} 
    ResourceInUseException *interface{} 
    StatusCode int64 
    
}

