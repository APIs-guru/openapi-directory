package operations

import (
	"openapi/pkg/models/shared"
)

type CommitTransactionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CommitTransactionRequestBody struct {
	ResourceArn   string `json:"resourceArn"`
	SecretArn     string `json:"secretArn"`
	TransactionID string `json:"transactionId"`
}

type CommitTransactionRequest struct {
	Headers CommitTransactionHeaders
	Request CommitTransactionRequestBody `request:"mediaType=application/json"`
}

type CommitTransactionResponse struct {
	BadRequestException          *interface{}
	CommitTransactionResponse    *shared.CommitTransactionResponse
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableError      *interface{}
	StatementTimeoutException    *interface{}
	StatusCode                   int64
}
