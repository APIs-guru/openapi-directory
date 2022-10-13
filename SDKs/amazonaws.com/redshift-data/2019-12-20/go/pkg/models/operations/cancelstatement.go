package operations

import (
	"openapi/pkg/models/shared"
)

type CancelStatementXAmzTargetEnum string

const (
	CancelStatementXAmzTargetEnumRedshiftDataCancelStatement CancelStatementXAmzTargetEnum = "RedshiftData.CancelStatement"
)

type CancelStatementHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelStatementXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CancelStatementRequest struct {
	Headers CancelStatementHeaders
	Request shared.CancelStatementRequest `request:"mediaType=application/json"`
}

type CancelStatementResponse struct {
	CancelStatementResponse   *shared.CancelStatementResponse
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
