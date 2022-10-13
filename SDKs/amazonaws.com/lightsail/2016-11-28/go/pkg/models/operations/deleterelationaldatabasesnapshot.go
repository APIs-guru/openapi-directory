package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRelationalDatabaseSnapshotXAmzTargetEnum string

const (
	DeleteRelationalDatabaseSnapshotXAmzTargetEnumLightsail20161128DeleteRelationalDatabaseSnapshot DeleteRelationalDatabaseSnapshotXAmzTargetEnum = "Lightsail_20161128.DeleteRelationalDatabaseSnapshot"
)

type DeleteRelationalDatabaseSnapshotHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRelationalDatabaseSnapshotXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteRelationalDatabaseSnapshotRequest struct {
	Headers DeleteRelationalDatabaseSnapshotHeaders
	Request shared.DeleteRelationalDatabaseSnapshotRequest `request:"mediaType=application/json"`
}

type DeleteRelationalDatabaseSnapshotResponse struct {
	AccessDeniedException                  *interface{}
	AccountSetupInProgressException        *interface{}
	ContentType                            string
	DeleteRelationalDatabaseSnapshotResult *shared.DeleteRelationalDatabaseSnapshotResult
	InvalidInputException                  *interface{}
	NotFoundException                      *interface{}
	OperationFailureException              *interface{}
	ServiceException                       *interface{}
	StatusCode                             int64
	UnauthenticatedException               *interface{}
}
