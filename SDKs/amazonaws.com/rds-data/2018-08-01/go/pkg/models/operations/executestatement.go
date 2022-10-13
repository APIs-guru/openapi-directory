package operations

import (
	"openapi/pkg/models/shared"
)

type ExecuteStatementHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ExecuteStatementRequestBodyResultSetOptions struct {
	DecimalReturnType *shared.DecimalReturnTypeEnum `json:"decimalReturnType"`
}

type ExecuteStatementRequestBody struct {
	ContinueAfterTimeout  *bool                                        `json:"continueAfterTimeout"`
	Database              *string                                      `json:"database"`
	IncludeResultMetadata *bool                                        `json:"includeResultMetadata"`
	Parameters            []shared.SQLParameter                        `json:"parameters"`
	ResourceArn           string                                       `json:"resourceArn"`
	ResultSetOptions      *ExecuteStatementRequestBodyResultSetOptions `json:"resultSetOptions"`
	Schema                *string                                      `json:"schema"`
	SecretArn             string                                       `json:"secretArn"`
	SQL                   string                                       `json:"sql"`
	TransactionID         *string                                      `json:"transactionId"`
}

type ExecuteStatementRequest struct {
	Headers ExecuteStatementHeaders
	Request ExecuteStatementRequestBody `request:"mediaType=application/json"`
}

type ExecuteStatementResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ExecuteStatementResponse     *shared.ExecuteStatementResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	ServiceUnavailableError      *interface{}
	StatementTimeoutException    *interface{}
	StatusCode                   int64
}
