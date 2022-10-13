package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSnapshotXAmzTargetEnum string

const (
	CreateSnapshotXAmzTargetEnumAmazonMemoryDbCreateSnapshot CreateSnapshotXAmzTargetEnum = "AmazonMemoryDB.CreateSnapshot"
)

type CreateSnapshotHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateSnapshotXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateSnapshotRequest struct {
	Headers CreateSnapshotHeaders
	Request shared.CreateSnapshotRequest `request:"mediaType=application/json"`
}

type CreateSnapshotResponse struct {
	ClusterNotFoundFault                 *interface{}
	ContentType                          string
	CreateSnapshotResponse               *shared.CreateSnapshotResponse
	InvalidClusterStateFault             *interface{}
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	SnapshotAlreadyExistsFault           *interface{}
	SnapshotQuotaExceededFault           *interface{}
	StatusCode                           int64
	TagQuotaPerResourceExceeded          *interface{}
}
