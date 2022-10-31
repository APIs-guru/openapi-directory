package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAutoSnapshotXAmzTargetEnum string

const (
	DeleteAutoSnapshotXAmzTargetEnumLightsail20161128DeleteAutoSnapshot DeleteAutoSnapshotXAmzTargetEnum = "Lightsail_20161128.DeleteAutoSnapshot"
)

type DeleteAutoSnapshotHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAutoSnapshotXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteAutoSnapshotRequest struct {
	Headers DeleteAutoSnapshotHeaders
	Request shared.DeleteAutoSnapshotRequest `request:"mediaType=application/json"`
}

type DeleteAutoSnapshotResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DeleteAutoSnapshotResult  *shared.DeleteAutoSnapshotResult
	InvalidInputException     *interface{}
	NotFoundException         *interface{}
	OperationFailureException *interface{}
	ServiceException          *interface{}
	StatusCode                int64
	UnauthenticatedException  *interface{}
}
