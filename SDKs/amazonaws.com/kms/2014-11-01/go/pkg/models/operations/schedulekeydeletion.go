package operations

import (
	"openapi/pkg/models/shared"
)

type ScheduleKeyDeletionXAmzTargetEnum string

const (
	ScheduleKeyDeletionXAmzTargetEnumTrentServiceScheduleKeyDeletion ScheduleKeyDeletionXAmzTargetEnum = "TrentService.ScheduleKeyDeletion"
)

type ScheduleKeyDeletionHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ScheduleKeyDeletionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ScheduleKeyDeletionRequest struct {
	Headers ScheduleKeyDeletionHeaders
	Request shared.ScheduleKeyDeletionRequest `request:"mediaType=application/json"`
}

type ScheduleKeyDeletionResponse struct {
	ContentType                 string
	DependencyTimeoutException  *interface{}
	InvalidArnException         *interface{}
	KmsInternalException        *interface{}
	KmsInvalidStateException    *interface{}
	NotFoundException           *interface{}
	ScheduleKeyDeletionResponse *shared.ScheduleKeyDeletionResponse
	StatusCode                  int64
}
