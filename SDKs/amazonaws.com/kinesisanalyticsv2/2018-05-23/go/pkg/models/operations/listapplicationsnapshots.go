package operations

import (
	"openapi/pkg/models/shared"
)

type ListApplicationSnapshotsXAmzTargetEnum string

const (
	ListApplicationSnapshotsXAmzTargetEnumKinesisAnalytics20180523ListApplicationSnapshots ListApplicationSnapshotsXAmzTargetEnum = "KinesisAnalytics_20180523.ListApplicationSnapshots"
)

type ListApplicationSnapshotsHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListApplicationSnapshotsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListApplicationSnapshotsRequest struct {
	Headers ListApplicationSnapshotsHeaders
	Request shared.ListApplicationSnapshotsRequest `request:"mediaType=application/json"`
}

type ListApplicationSnapshotsResponse struct {
	ContentType                      string
	InvalidArgumentException         *interface{}
	ListApplicationSnapshotsResponse *shared.ListApplicationSnapshotsResponse
	StatusCode                       int64
	UnsupportedOperationException    *interface{}
}
