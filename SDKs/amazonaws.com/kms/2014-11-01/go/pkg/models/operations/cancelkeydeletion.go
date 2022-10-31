package operations

import (
	"openapi/pkg/models/shared"
)

type CancelKeyDeletionXAmzTargetEnum string

const (
	CancelKeyDeletionXAmzTargetEnumTrentServiceCancelKeyDeletion CancelKeyDeletionXAmzTargetEnum = "TrentService.CancelKeyDeletion"
)

type CancelKeyDeletionHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelKeyDeletionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
