package operations

import (
	"openapi/pkg/models/shared"
)

type PutKeyPolicyXAmzTargetEnum string

const (
	PutKeyPolicyXAmzTargetEnumTrentServicePutKeyPolicy PutKeyPolicyXAmzTargetEnum = "TrentService.PutKeyPolicy"
)

type PutKeyPolicyHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutKeyPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutKeyPolicyRequest struct {
	Headers PutKeyPolicyHeaders
	Request shared.PutKeyPolicyRequest `request:"mediaType=application/json"`
}

type PutKeyPolicyResponse struct {
	ContentType                      string
	DependencyTimeoutException       *interface{}
	InvalidArnException              *interface{}
	KmsInternalException             *interface{}
	KmsInvalidStateException         *interface{}
	LimitExceededException           *interface{}
	MalformedPolicyDocumentException *interface{}
	NotFoundException                *interface{}
	StatusCode                       int64
	UnsupportedOperationException    *interface{}
}
