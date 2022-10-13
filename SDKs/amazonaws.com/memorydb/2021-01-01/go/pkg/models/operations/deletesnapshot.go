package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSnapshotXAmzTargetEnum string

const (
	DeleteSnapshotXAmzTargetEnumAmazonMemoryDbDeleteSnapshot DeleteSnapshotXAmzTargetEnum = "AmazonMemoryDB.DeleteSnapshot"
)

type DeleteSnapshotHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSnapshotXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteSnapshotRequest struct {
	Headers DeleteSnapshotHeaders
	Request shared.DeleteSnapshotRequest `request:"mediaType=application/json"`
}

type DeleteSnapshotResponse struct {
	ContentType                          string
	DeleteSnapshotResponse               *shared.DeleteSnapshotResponse
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	InvalidSnapshotStateFault            *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	SnapshotNotFoundFault                *interface{}
	StatusCode                           int64
}
