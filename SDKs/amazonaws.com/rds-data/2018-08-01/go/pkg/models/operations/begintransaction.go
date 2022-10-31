package operations

import (
"openapi/pkg/models/shared")

type BeginTransactionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type BeginTransactionRequestBody struct {
    Database *string `json:"database,omitempty"`
    ResourceArn string `json:"resourceArn"`
    Schema *string `json:"schema,omitempty"`
    SecretArn string `json:"secretArn"`
    
}

type BeginTransactionRequest struct {
    Headers BeginTransactionHeaders 
    Request BeginTransactionRequestBody `request:"mediaType=application/json"`
    
}

type BeginTransactionResponse struct {
    BadRequestException *interface{} 
    BeginTransactionResponse *shared.BeginTransactionResponse 
    ContentType string 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    ServiceUnavailableError *interface{} 
    StatementTimeoutException *interface{} 
    StatusCode int64 
    
}

