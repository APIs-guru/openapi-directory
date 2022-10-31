package operations

import (
"openapi/pkg/models/shared")


type BatchExecuteStatementXAmzTargetEnum string

const (
    BatchExecuteStatementXAmzTargetEnumRedshiftDataBatchExecuteStatement BatchExecuteStatementXAmzTargetEnum = "RedshiftData.BatchExecuteStatement"
)


type BatchExecuteStatementHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget BatchExecuteStatementXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type BatchExecuteStatementRequest struct {
    Headers BatchExecuteStatementHeaders 
    Request shared.BatchExecuteStatementInput `request:"mediaType=application/json"`
    
}

type BatchExecuteStatementResponse struct {
    ActiveStatementsExceededException *interface{} 
    BatchExecuteStatementException *interface{} 
    BatchExecuteStatementOutput *shared.BatchExecuteStatementOutput 
    ContentType string 
    StatusCode int64 
    ValidationException *interface{} 
    
}

