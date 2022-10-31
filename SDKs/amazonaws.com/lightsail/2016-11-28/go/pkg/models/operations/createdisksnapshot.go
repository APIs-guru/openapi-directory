package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDiskSnapshotXAmzTargetEnum string

const (
	CreateDiskSnapshotXAmzTargetEnumLightsail20161128CreateDiskSnapshot CreateDiskSnapshotXAmzTargetEnum = "Lightsail_20161128.CreateDiskSnapshot"
)

type CreateDiskSnapshotHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDiskSnapshotXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateDiskSnapshotRequest struct {
	Headers CreateDiskSnapshotHeaders
	Request shared.CreateDiskSnapshotRequest `request:"mediaType=application/json"`
}

type CreateDiskSnapshotResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	CreateDiskSnapshotResult        *shared.CreateDiskSnapshotResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
