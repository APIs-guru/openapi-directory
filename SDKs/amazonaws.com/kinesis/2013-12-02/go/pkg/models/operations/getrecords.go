package operations

import (
"openapi/pkg/models/shared")


type GetRecordsXAmzTargetEnum string

const (
    GetRecordsXAmzTargetEnumKinesis20131202GetRecords GetRecordsXAmzTargetEnum = "Kinesis_20131202.GetRecords"
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
    InvalidArgumentException *interface{} 
    KmsAccessDeniedException *interface{} 
    KmsDisabledException *interface{} 
    KmsInvalidStateException *interface{} 
    KmsNotFoundException *interface{} 
    KmsOptInRequired *interface{} 
    KmsThrottlingException *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

