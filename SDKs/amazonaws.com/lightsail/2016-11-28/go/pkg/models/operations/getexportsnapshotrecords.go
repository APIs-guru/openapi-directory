package operations

import (
	"openapi/pkg/models/shared"
)

type GetExportSnapshotRecordsXAmzTargetEnum string

const (
	GetExportSnapshotRecordsXAmzTargetEnumLightsail20161128GetExportSnapshotRecords GetExportSnapshotRecordsXAmzTargetEnum = "Lightsail_20161128.GetExportSnapshotRecords"
)

type GetExportSnapshotRecordsHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetExportSnapshotRecordsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetExportSnapshotRecordsRequest struct {
	Headers GetExportSnapshotRecordsHeaders
	Request shared.GetExportSnapshotRecordsRequest `request:"mediaType=application/json"`
}

type GetExportSnapshotRecordsResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetExportSnapshotRecordsResult  *shared.GetExportSnapshotRecordsResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
