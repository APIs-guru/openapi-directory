package operations

import (
"openapi/pkg/models/shared")


type SplitShardXAmzTargetEnum string

const (
    SplitShardXAmzTargetEnumKinesis20131202SplitShard SplitShardXAmzTargetEnum = "Kinesis_20131202.SplitShard"
)


type SplitShardHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SplitShardXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SplitShardRequest struct {
    Headers SplitShardHeaders 
    Request shared.SplitShardInput `request:"mediaType=application/json"`
    
}

type SplitShardResponse struct {
    ContentType string 
    InvalidArgumentException *interface{} 
    LimitExceededException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

