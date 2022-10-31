package operations

import (
	"openapi/pkg/models/shared"
)

type CancelStatementXAmzTargetEnum string

const (
	CancelStatementXAmzTargetEnumRedshiftDataCancelStatement CancelStatementXAmzTargetEnum = "RedshiftData.CancelStatement"
)

type CancelStatementHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelStatementXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
