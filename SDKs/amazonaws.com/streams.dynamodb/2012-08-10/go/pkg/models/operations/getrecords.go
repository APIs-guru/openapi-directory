package operations

import (
"openapi/pkg/models/shared")


type GetRecordsXAmzTargetEnum string

const (
    GetRecordsXAmzTargetEnumDynamoDbStreams20120810GetRecords GetRecordsXAmzTargetEnum = "DynamoDBStreams_20120810.GetRecords"
)


type GetRecordsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetRecordsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetRecordsRequest struct {
    Headers GetRecordsHeaders 
    Request shared.GetRecordsInput `request:"mediaType=application/json"`
    
}

type GetRecordsResponse struct {
    ContentType string 
    ExpiredIteratorException *interface{} 
    GetRecordsOutput *shared.GetRecordsOutput 
    InternalServerError *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TrimmedDataAccessException *interface{} 
    
}

