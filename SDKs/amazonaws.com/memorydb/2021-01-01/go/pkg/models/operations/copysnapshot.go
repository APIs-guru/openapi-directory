package operations

import (
	"openapi/pkg/models/shared"
)

type CopySnapshotXAmzTargetEnum string

const (
	CopySnapshotXAmzTargetEnumAmazonMemoryDbCopySnapshot CopySnapshotXAmzTargetEnum = "AmazonMemoryDB.CopySnapshot"
)

type CopySnapshotHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CopySnapshotXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CopySnapshotRequest struct {
	Headers CopySnapshotHeaders
	Request shared.CopySnapshotRequest `request:"mediaType=application/json"`
}

type CopySnapshotResponse struct {
	ContentType                          string
	CopySnapshotResponse                 *shared.CopySnapshotResponse
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	InvalidSnapshotStateFault            *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	SnapshotAlreadyExistsFault           *interface{}
	SnapshotNotFoundFault                *interface{}
	SnapshotQuotaExceededFault           *interface{}
	StatusCode                           int64
	TagQuotaPerResourceExceeded          *interface{}
}
