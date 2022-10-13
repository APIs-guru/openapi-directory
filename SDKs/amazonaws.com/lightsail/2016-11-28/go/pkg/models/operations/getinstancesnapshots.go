package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstanceSnapshotsXAmzTargetEnum string

const (
	GetInstanceSnapshotsXAmzTargetEnumLightsail20161128GetInstanceSnapshots GetInstanceSnapshotsXAmzTargetEnum = "Lightsail_20161128.GetInstanceSnapshots"
)

type GetInstanceSnapshotsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetInstanceSnapshotsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetInstanceSnapshotsRequest struct {
	Headers GetInstanceSnapshotsHeaders
	Request shared.GetInstanceSnapshotsRequest `request:"mediaType=application/json"`
}

type GetInstanceSnapshotsResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetInstanceSnapshotsResult      *shared.GetInstanceSnapshotsResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
