package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSnapshotXAmzTargetEnum string

const (
	DeleteSnapshotXAmzTargetEnumAmazonMemoryDbDeleteSnapshot DeleteSnapshotXAmzTargetEnum = "AmazonMemoryDB.DeleteSnapshot"
)

type DeleteSnapshotHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSnapshotXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
