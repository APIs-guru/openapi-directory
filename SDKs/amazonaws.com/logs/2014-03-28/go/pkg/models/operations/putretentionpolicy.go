package operations

import (
	"openapi/pkg/models/shared"
)

type PutRetentionPolicyXAmzTargetEnum string

const (
	PutRetentionPolicyXAmzTargetEnumLogs20140328PutRetentionPolicy PutRetentionPolicyXAmzTargetEnum = "Logs_20140328.PutRetentionPolicy"
)

type PutRetentionPolicyHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutRetentionPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutRetentionPolicyRequest struct {
	Headers PutRetentionPolicyHeaders
	Request shared.PutRetentionPolicyRequest `request:"mediaType=application/json"`
}

type PutRetentionPolicyResponse struct {
	ContentType                 string
	InvalidParameterException   *interface{}
	OperationAbortedException   *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
