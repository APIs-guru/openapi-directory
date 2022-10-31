package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteApplicationSnapshotXAmzTargetEnum string

const (
	DeleteApplicationSnapshotXAmzTargetEnumKinesisAnalytics20180523DeleteApplicationSnapshot DeleteApplicationSnapshotXAmzTargetEnum = "KinesisAnalytics_20180523.DeleteApplicationSnapshot"
)

type DeleteApplicationSnapshotHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteApplicationSnapshotXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteApplicationSnapshotRequest struct {
	Headers DeleteApplicationSnapshotHeaders
	Request shared.DeleteApplicationSnapshotRequest `request:"mediaType=application/json"`
}

type DeleteApplicationSnapshotResponse struct {
	ContentType                       string
	DeleteApplicationSnapshotResponse map[string]interface{}
	InvalidArgumentException          *interface{}
	InvalidRequestException           *interface{}
	ResourceInUseException            *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	UnsupportedOperationException     *interface{}
}
