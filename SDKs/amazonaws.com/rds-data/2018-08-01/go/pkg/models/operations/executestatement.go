package operations

import (
	"openapi/pkg/models/shared"
)

type ExecuteStatementHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ExecuteStatementRequestBodyResultSetOptions struct {
	DecimalReturnType *shared.DecimalReturnTypeEnum `json:"decimalReturnType,omitempty"`
}

type ExecuteStatementRequestBody struct {
	ContinueAfterTimeout  *bool                                        `json:"continueAfterTimeout,omitempty"`
	Database              *string                                      `json:"database,omitempty"`
	IncludeResultMetadata *bool                                        `json:"includeResultMetadata,omitempty"`
	Parameters            []shared.SQLParameter                        `json:"parameters,omitempty"`
	ResourceArn           string                                       `json:"resourceArn"`
	ResultSetOptions      *ExecuteStatementRequestBodyResultSetOptions `json:"resultSetOptions,omitempty"`
	Schema                *string                                      `json:"schema,omitempty"`
	SecretArn             string                                       `json:"secretArn"`
	SQL                   string                                       `json:"sql"`
	TransactionID         *string                                      `json:"transactionId,omitempty"`
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
