package operations

import (
	"openapi/pkg/models/shared"
)

type PutSubscriptionFilterXAmzTargetEnum string

const (
	PutSubscriptionFilterXAmzTargetEnumLogs20140328PutSubscriptionFilter PutSubscriptionFilterXAmzTargetEnum = "Logs_20140328.PutSubscriptionFilter"
)

type PutSubscriptionFilterHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutSubscriptionFilterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutSubscriptionFilterRequest struct {
	Headers PutSubscriptionFilterHeaders
	Request shared.PutSubscriptionFilterRequest `request:"mediaType=application/json"`
}

type PutSubscriptionFilterResponse struct {
	ContentType                 string
	InvalidParameterException   *interface{}
	LimitExceededException      *interface{}
	OperationAbortedException   *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
