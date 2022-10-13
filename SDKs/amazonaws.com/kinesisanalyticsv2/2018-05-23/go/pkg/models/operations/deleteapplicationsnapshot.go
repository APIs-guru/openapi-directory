package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteApplicationSnapshotXAmzTargetEnum string

const (
	DeleteApplicationSnapshotXAmzTargetEnumKinesisAnalytics20180523DeleteApplicationSnapshot DeleteApplicationSnapshotXAmzTargetEnum = "KinesisAnalytics_20180523.DeleteApplicationSnapshot"
)

type DeleteApplicationSnapshotHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteApplicationSnapshotXAmzTargetEnum `header:"name=X-Amz-Target"`
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
