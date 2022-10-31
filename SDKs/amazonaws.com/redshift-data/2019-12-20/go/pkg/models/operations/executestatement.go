package operations

import (
"openapi/pkg/models/shared")


type ExecuteStatementXAmzTargetEnum string

const (
    ExecuteStatementXAmzTargetEnumRedshiftDataExecuteStatement ExecuteStatementXAmzTargetEnum = "RedshiftData.ExecuteStatement"
)


type ExecuteStatementHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ExecuteStatementXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ExecuteStatementRequest struct {
    Headers ExecuteStatementHeaders 
    Request shared.ExecuteStatementInput `request:"mediaType=application/json"`
    
}

type ExecuteStatementResponse struct {
    ActiveStatementsExceededException *interface{} 
    ContentType string 
    ExecuteStatementException *interface{} 
    ExecuteStatementOutput *shared.ExecuteStatementOutput 
    StatusCode int64 
    ValidationException *interface{} 
    
}

