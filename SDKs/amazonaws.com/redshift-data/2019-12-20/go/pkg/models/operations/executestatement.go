package operations

import (
	"openapi/pkg/models/shared"
)

type ExecuteStatementXAmzTargetEnum string

const (
	ExecuteStatementXAmzTargetEnumRedshiftDataExecuteStatement ExecuteStatementXAmzTargetEnum = "RedshiftData.ExecuteStatement"
)

type ExecuteStatementHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ExecuteStatementXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ExecuteStatementRequest struct {
	Headers ExecuteStatementHeaders
	Request shared.ExecuteStatementInput `request:"mediaType=application/json"`
}

type ExecuteStatementResponse struct {
	ActiveStatementsExceededException *interface{}
	ContentType                       string
	ExecuteStatementException         *interface{}
	ExecuteStatementOutput            *shared.ExecuteStatementOutput
	StatusCode                        int64
	ValidationException               *interface{}
}
