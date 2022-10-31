package operations

import (
"openapi/pkg/models/shared")


type ListStreamsXAmzTargetEnum string

const (
    ListStreamsXAmzTargetEnumDynamoDbStreams20120810ListStreams ListStreamsXAmzTargetEnum = "DynamoDBStreams_20120810.ListStreams"
)


type ListStreamsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListStreamsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListStreamsRequest struct {
    Headers ListStreamsHeaders 
    Request shared.ListStreamsInput `request:"mediaType=application/json"`
    
}

type ListStreamsResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    ListStreamsOutput *shared.ListStreamsOutput 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

