package operations

import (
	"openapi/pkg/models/shared"
)

type ExportSnapshotXAmzTargetEnum string

const (
	ExportSnapshotXAmzTargetEnumLightsail20161128ExportSnapshot ExportSnapshotXAmzTargetEnum = "Lightsail_20161128.ExportSnapshot"
)

type ExportSnapshotHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ExportSnapshotXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ExportSnapshotRequest struct {
	Headers ExportSnapshotHeaders
	Request shared.ExportSnapshotRequest `request:"mediaType=application/json"`
}

type ExportSnapshotResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	ExportSnapshotResult            *shared.ExportSnapshotResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
