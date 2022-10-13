package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInstanceSnapshotXAmzTargetEnum string

const (
	CreateInstanceSnapshotXAmzTargetEnumLightsail20161128CreateInstanceSnapshot CreateInstanceSnapshotXAmzTargetEnum = "Lightsail_20161128.CreateInstanceSnapshot"
)

type CreateInstanceSnapshotHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateInstanceSnapshotXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateInstanceSnapshotRequest struct {
	Headers CreateInstanceSnapshotHeaders
	Request shared.CreateInstanceSnapshotRequest `request:"mediaType=application/json"`
}

type CreateInstanceSnapshotResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	CreateInstanceSnapshotResult    *shared.CreateInstanceSnapshotResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
