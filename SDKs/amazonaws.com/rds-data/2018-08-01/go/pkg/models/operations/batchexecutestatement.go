package operations

import (
"openapi/pkg/models/shared")

type BatchExecuteStatementHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type BatchExecuteStatementRequestBody struct {
    Database *string `json:"database,omitempty"`
    ParameterSets [][]shared.SQLParameter `json:"parameterSets,omitempty"`
    ResourceArn string `json:"resourceArn"`
    Schema *string `json:"schema,omitempty"`
    SecretArn string `json:"secretArn"`
    SQL string `json:"sql"`
    TransactionID *string `json:"transactionId,omitempty"`
    
}

type BatchExecuteStatementRequest struct {
    Headers BatchExecuteStatementHeaders 
    Request BatchExecuteStatementRequestBody `request:"mediaType=application/json"`
    
}

type BatchExecuteStatementResponse struct {
    BadRequestException *interface{} 
    BatchExecuteStatementResponse *shared.BatchExecuteStatementResponse 
    ContentType string 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    ServiceUnavailableError *interface{} 
    StatementTimeoutException *interface{} 
    StatusCode int64 
    
}

