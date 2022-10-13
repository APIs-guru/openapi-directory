package operations

import (
	"openapi/pkg/models/shared"
)

type GetLogRecordXAmzTargetEnum string

const (
	GetLogRecordXAmzTargetEnumLogs20140328GetLogRecord GetLogRecordXAmzTargetEnum = "Logs_20140328.GetLogRecord"
)

type GetLogRecordHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetLogRecordXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetLogRecordRequest struct {
	Headers GetLogRecordHeaders
	Request shared.GetLogRecordRequest `request:"mediaType=application/json"`
}

type GetLogRecordResponse struct {
	ContentType                 string
	GetLogRecordResponse        *shared.GetLogRecordResponse
	InvalidParameterException   *interface{}
	LimitExceededException      *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
