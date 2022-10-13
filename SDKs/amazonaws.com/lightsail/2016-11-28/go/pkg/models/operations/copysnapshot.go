package operations

import (
	"openapi/pkg/models/shared"
)

type CopySnapshotXAmzTargetEnum string

const (
	CopySnapshotXAmzTargetEnumLightsail20161128CopySnapshot CopySnapshotXAmzTargetEnum = "Lightsail_20161128.CopySnapshot"
)

type CopySnapshotHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CopySnapshotXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CopySnapshotRequest struct {
	Headers CopySnapshotHeaders
	Request shared.CopySnapshotRequest `request:"mediaType=application/json"`
}

type CopySnapshotResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	CopySnapshotResult              *shared.CopySnapshotResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
