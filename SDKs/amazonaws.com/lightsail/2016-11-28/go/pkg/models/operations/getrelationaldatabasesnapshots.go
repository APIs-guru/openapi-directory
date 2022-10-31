package operations

import (
	"openapi/pkg/models/shared"
)

type GetRelationalDatabaseSnapshotsXAmzTargetEnum string

const (
	GetRelationalDatabaseSnapshotsXAmzTargetEnumLightsail20161128GetRelationalDatabaseSnapshots GetRelationalDatabaseSnapshotsXAmzTargetEnum = "Lightsail_20161128.GetRelationalDatabaseSnapshots"
)

type GetRelationalDatabaseSnapshotsHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRelationalDatabaseSnapshotsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetRelationalDatabaseSnapshotsRequest struct {
	Headers GetRelationalDatabaseSnapshotsHeaders
	Request shared.GetRelationalDatabaseSnapshotsRequest `request:"mediaType=application/json"`
}

type GetRelationalDatabaseSnapshotsResponse struct {
	AccessDeniedException                *interface{}
	AccountSetupInProgressException      *interface{}
	ContentType                          string
	GetRelationalDatabaseSnapshotsResult *shared.GetRelationalDatabaseSnapshotsResult
	InvalidInputException                *interface{}
	NotFoundException                    *interface{}
	OperationFailureException            *interface{}
	ServiceException                     *interface{}
	StatusCode                           int64
	UnauthenticatedException             *interface{}
}
