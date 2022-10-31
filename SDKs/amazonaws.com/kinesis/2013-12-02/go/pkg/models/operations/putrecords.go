package operations

import (
"openapi/pkg/models/shared")


type PutRecordsXAmzTargetEnum string

const (
    PutRecordsXAmzTargetEnumKinesis20131202PutRecords PutRecordsXAmzTargetEnum = "Kinesis_20131202.PutRecords"
)


type PutRecordsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutRecordsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutRecordsRequest struct {
    Headers PutRecordsHeaders 
    Request shared.PutRecordsInput `request:"mediaType=application/json"`
    
}

type PutRecordsResponse struct {
    ContentType string 
    InvalidArgumentException *interface{} 
    KmsAccessDeniedException *interface{} 
    KmsDisabledException *interface{} 
    KmsInvalidStateException *interface{} 
    KmsNotFoundException *interface{} 
    KmsOptInRequired *interface{} 
    KmsThrottlingException *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    PutRecordsOutput *shared.PutRecordsOutput 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

