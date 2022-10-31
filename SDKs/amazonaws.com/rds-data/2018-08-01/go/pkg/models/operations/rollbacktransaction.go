package operations

import (
	"openapi/pkg/models/shared"
)

type RollbackTransactionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type RollbackTransactionRequestBody struct {
	ResourceArn   string `json:"resourceArn"`
	SecretArn     string `json:"secretArn"`
	TransactionID string `json:"transactionId"`
}

type RollbackTransactionRequest struct {
	Headers RollbackTransactionHeaders
	Request RollbackTransactionRequestBody `request:"mediaType=application/json"`
}

type RollbackTransactionResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	NotFoundException            *interface{}
	RollbackTransactionResponse  *shared.RollbackTransactionResponse
	ServiceUnavailableError      *interface{}
	StatementTimeoutException    *interface{}
	StatusCode                   int64
}
