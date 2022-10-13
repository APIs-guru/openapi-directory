package operations

import (
	"openapi/pkg/models/shared"
)

type BatchExecuteStatementHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchExecuteStatementRequestBody struct {
	Database      *string                 `json:"database"`
	ParameterSets [][]shared.SQLParameter `json:"parameterSets"`
	ResourceArn   string                  `json:"resourceArn"`
	Schema        *string                 `json:"schema"`
	SecretArn     string                  `json:"secretArn"`
	SQL           string                  `json:"sql"`
	TransactionID *string                 `json:"transactionId"`
}

type BatchExecuteStatementRequest struct {
	Headers BatchExecuteStatementHeaders
	Request BatchExecuteStatementRequestBody `request:"mediaType=application/json"`
}

type BatchExecuteStatementResponse struct {
	BadRequestException           *interface{}
	BatchExecuteStatementResponse *shared.BatchExecuteStatementResponse
	ContentType                   string
	ForbiddenException            *interface{}
	InternalServerErrorException  *interface{}
	ServiceUnavailableError       *interface{}
	StatementTimeoutException     *interface{}
	StatusCode                    int64
}
