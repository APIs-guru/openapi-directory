package operations

import (
"openapi/pkg/models/shared")


type ListShardsXAmzTargetEnum string

const (
    ListShardsXAmzTargetEnumKinesis20131202ListShards ListShardsXAmzTargetEnum = "Kinesis_20131202.ListShards"
)


type ListShardsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListShardsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListShardsRequest struct {
    Headers ListShardsHeaders 
    Request shared.ListShardsInput `request:"mediaType=application/json"`
    
}

type ListShardsResponse struct {
    ContentType string 
    ExpiredNextTokenException *interface{} 
    InvalidArgumentException *interface{} 
    LimitExceededException *interface{} 
    ListShardsOutput *shared.ListShardsOutput 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

