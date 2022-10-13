package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSubscriptionFilterXAmzTargetEnum string

const (
	DeleteSubscriptionFilterXAmzTargetEnumLogs20140328DeleteSubscriptionFilter DeleteSubscriptionFilterXAmzTargetEnum = "Logs_20140328.DeleteSubscriptionFilter"
)

type DeleteSubscriptionFilterHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSubscriptionFilterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteSubscriptionFilterRequest struct {
	Headers DeleteSubscriptionFilterHeaders
	Request shared.DeleteSubscriptionFilterRequest `request:"mediaType=application/json"`
}

type DeleteSubscriptionFilterResponse struct {
	ContentType                 string
	InvalidParameterException   *interface{}
	OperationAbortedException   *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
