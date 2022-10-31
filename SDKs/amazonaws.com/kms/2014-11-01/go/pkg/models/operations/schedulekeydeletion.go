package operations

import (
	"openapi/pkg/models/shared"
)

type ScheduleKeyDeletionXAmzTargetEnum string

const (
	ScheduleKeyDeletionXAmzTargetEnumTrentServiceScheduleKeyDeletion ScheduleKeyDeletionXAmzTargetEnum = "TrentService.ScheduleKeyDeletion"
)

type ScheduleKeyDeletionHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ScheduleKeyDeletionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
