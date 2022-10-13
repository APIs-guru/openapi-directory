package operations

import (
	"openapi/pkg/models/shared"
)

type CreateExportTaskXAmzTargetEnum string

const (
	CreateExportTaskXAmzTargetEnumLogs20140328CreateExportTask CreateExportTaskXAmzTargetEnum = "Logs_20140328.CreateExportTask"
)

type CreateExportTaskHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateExportTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateExportTaskRequest struct {
	Headers CreateExportTaskHeaders
	Request shared.CreateExportTaskRequest `request:"mediaType=application/json"`
}

type CreateExportTaskResponse struct {
	ContentType                    string
	CreateExportTaskResponse       *shared.CreateExportTaskResponse
	InvalidParameterException      *interface{}
	LimitExceededException         *interface{}
	OperationAbortedException      *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
