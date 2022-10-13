package operations

import (
	"openapi/pkg/models/shared"
)

type CancelExportTaskXAmzTargetEnum string

const (
	CancelExportTaskXAmzTargetEnumLogs20140328CancelExportTask CancelExportTaskXAmzTargetEnum = "Logs_20140328.CancelExportTask"
)

type CancelExportTaskHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelExportTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CancelExportTaskRequest struct {
	Headers CancelExportTaskHeaders
	Request shared.CancelExportTaskRequest `request:"mediaType=application/json"`
}

type CancelExportTaskResponse struct {
	ContentType                 string
	InvalidOperationException   *interface{}
	InvalidParameterException   *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
