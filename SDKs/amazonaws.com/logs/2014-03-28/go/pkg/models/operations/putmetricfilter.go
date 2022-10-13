package operations

import (
	"openapi/pkg/models/shared"
)

type PutMetricFilterXAmzTargetEnum string

const (
	PutMetricFilterXAmzTargetEnumLogs20140328PutMetricFilter PutMetricFilterXAmzTargetEnum = "Logs_20140328.PutMetricFilter"
)

type PutMetricFilterHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutMetricFilterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutMetricFilterRequest struct {
	Headers PutMetricFilterHeaders
	Request shared.PutMetricFilterRequest `request:"mediaType=application/json"`
}

type PutMetricFilterResponse struct {
	ContentType                 string
	InvalidParameterException   *interface{}
	LimitExceededException      *interface{}
	OperationAbortedException   *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
