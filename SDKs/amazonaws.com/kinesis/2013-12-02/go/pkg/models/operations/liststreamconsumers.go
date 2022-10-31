package operations

import (
"openapi/pkg/models/shared")

type ListStreamConsumersQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListStreamConsumersXAmzTargetEnum string

const (
    ListStreamConsumersXAmzTargetEnumKinesis20131202ListStreamConsumers ListStreamConsumersXAmzTargetEnum = "Kinesis_20131202.ListStreamConsumers"
)


type ListStreamConsumersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListStreamConsumersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListStreamConsumersRequest struct {
    QueryParams ListStreamConsumersQueryParams 
    Headers ListStreamConsumersHeaders 
    Request shared.ListStreamConsumersInput `request:"mediaType=application/json"`
    
}

type ListStreamConsumersResponse struct {
    ContentType string 
    ExpiredNextTokenException *interface{} 
    InvalidArgumentException *interface{} 
    LimitExceededException *interface{} 
    ListStreamConsumersOutput *shared.ListStreamConsumersOutput 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

