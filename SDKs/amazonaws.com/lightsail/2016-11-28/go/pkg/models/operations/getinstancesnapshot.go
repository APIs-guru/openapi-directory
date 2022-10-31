package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstanceSnapshotXAmzTargetEnum string

const (
	GetInstanceSnapshotXAmzTargetEnumLightsail20161128GetInstanceSnapshot GetInstanceSnapshotXAmzTargetEnum = "Lightsail_20161128.GetInstanceSnapshot"
)

type GetInstanceSnapshotHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetInstanceSnapshotXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetInstanceSnapshotRequest struct {
	Headers GetInstanceSnapshotHeaders
	Request shared.GetInstanceSnapshotRequest `request:"mediaType=application/json"`
}

type GetInstanceSnapshotResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetInstanceSnapshotResult       *shared.GetInstanceSnapshotResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
