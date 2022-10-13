package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDiskSnapshotXAmzTargetEnum string

const (
	DeleteDiskSnapshotXAmzTargetEnumLightsail20161128DeleteDiskSnapshot DeleteDiskSnapshotXAmzTargetEnum = "Lightsail_20161128.DeleteDiskSnapshot"
)

type DeleteDiskSnapshotHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDiskSnapshotXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteDiskSnapshotRequest struct {
	Headers DeleteDiskSnapshotHeaders
	Request shared.DeleteDiskSnapshotRequest `request:"mediaType=application/json"`
}

type DeleteDiskSnapshotResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	DeleteDiskSnapshotResult        *shared.DeleteDiskSnapshotResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
