package operations

import (
	"openapi/pkg/models/shared"
)

type PutDestinationPolicyXAmzTargetEnum string

const (
	PutDestinationPolicyXAmzTargetEnumLogs20140328PutDestinationPolicy PutDestinationPolicyXAmzTargetEnum = "Logs_20140328.PutDestinationPolicy"
)

type PutDestinationPolicyHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutDestinationPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutDestinationPolicyRequest struct {
	Headers PutDestinationPolicyHeaders
	Request shared.PutDestinationPolicyRequest `request:"mediaType=application/json"`
}

type PutDestinationPolicyResponse struct {
	ContentType                 string
	InvalidParameterException   *interface{}
	OperationAbortedException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
