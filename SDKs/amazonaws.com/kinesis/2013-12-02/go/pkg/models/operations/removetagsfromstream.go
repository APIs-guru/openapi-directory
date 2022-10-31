package operations

import (
"openapi/pkg/models/shared")


type RemoveTagsFromStreamXAmzTargetEnum string

const (
    RemoveTagsFromStreamXAmzTargetEnumKinesis20131202RemoveTagsFromStream RemoveTagsFromStreamXAmzTargetEnum = "Kinesis_20131202.RemoveTagsFromStream"
)


type RemoveTagsFromStreamHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RemoveTagsFromStreamXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RemoveTagsFromStreamRequest struct {
    Headers RemoveTagsFromStreamHeaders 
    Request shared.RemoveTagsFromStreamInput `request:"mediaType=application/json"`
    
}

type RemoveTagsFromStreamResponse struct {
    ContentType string 
    InvalidArgumentException *interface{} 
    LimitExceededException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

