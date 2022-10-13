package operations

import (
	"openapi/pkg/models/shared"
)

type CancelKeyDeletionXAmzTargetEnum string

const (
	CancelKeyDeletionXAmzTargetEnumTrentServiceCancelKeyDeletion CancelKeyDeletionXAmzTargetEnum = "TrentService.CancelKeyDeletion"
)

type CancelKeyDeletionHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelKeyDeletionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CancelKeyDeletionRequest struct {
	Headers CancelKeyDeletionHeaders
	Request shared.CancelKeyDeletionRequest `request:"mediaType=application/json"`
}

type CancelKeyDeletionResponse struct {
	CancelKeyDeletionResponse  *shared.CancelKeyDeletionResponse
	ContentType                string
	DependencyTimeoutException *interface{}
	InvalidArnException        *interface{}
	KmsInternalException       *interface{}
	KmsInvalidStateException   *interface{}
	NotFoundException          *interface{}
	StatusCode                 int64
}
