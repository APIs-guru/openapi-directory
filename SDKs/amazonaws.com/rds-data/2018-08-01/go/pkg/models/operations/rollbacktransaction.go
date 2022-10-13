package operations

import (
	"openapi/pkg/models/shared"
)

type RollbackTransactionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
