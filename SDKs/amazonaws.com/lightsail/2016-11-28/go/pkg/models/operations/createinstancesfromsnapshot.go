package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInstancesFromSnapshotXAmzTargetEnum string

const (
	CreateInstancesFromSnapshotXAmzTargetEnumLightsail20161128CreateInstancesFromSnapshot CreateInstancesFromSnapshotXAmzTargetEnum = "Lightsail_20161128.CreateInstancesFromSnapshot"
)

type CreateInstancesFromSnapshotHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateInstancesFromSnapshotXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateInstancesFromSnapshotRequest struct {
	Headers CreateInstancesFromSnapshotHeaders
	Request shared.CreateInstancesFromSnapshotRequest `request:"mediaType=application/json"`
}

type CreateInstancesFromSnapshotResponse struct {
	AccessDeniedException             *interface{}
	AccountSetupInProgressException   *interface{}
	ContentType                       string
	CreateInstancesFromSnapshotResult *shared.CreateInstancesFromSnapshotResult
	InvalidInputException             *interface{}
	NotFoundException                 *interface{}
	OperationFailureException         *interface{}
	ServiceException                  *interface{}
	StatusCode                        int64
	UnauthenticatedException          *interface{}
}
