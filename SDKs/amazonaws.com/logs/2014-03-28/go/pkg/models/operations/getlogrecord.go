package operations

import (
"openapi/pkg/models/shared")


type GetLogRecordXAmzTargetEnum string

const (
    GetLogRecordXAmzTargetEnumLogs20140328GetLogRecord GetLogRecordXAmzTargetEnum = "Logs_20140328.GetLogRecord"
)


type GetLogRecordHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetLogRecordXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetLogRecordRequest struct {
    Headers GetLogRecordHeaders 
    Request shared.GetLogRecordRequest `request:"mediaType=application/json"`
    
}

type GetLogRecordResponse struct {
    ContentType string 
    GetLogRecordResponse *shared.GetLogRecordResponse 
    InvalidParameterException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

