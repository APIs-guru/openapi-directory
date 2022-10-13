package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeApplicationSnapshotXAmzTargetEnum string

const (
	DescribeApplicationSnapshotXAmzTargetEnumKinesisAnalytics20180523DescribeApplicationSnapshot DescribeApplicationSnapshotXAmzTargetEnum = "KinesisAnalytics_20180523.DescribeApplicationSnapshot"
)

type DescribeApplicationSnapshotHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeApplicationSnapshotXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeApplicationSnapshotRequest struct {
	Headers DescribeApplicationSnapshotHeaders
	Request shared.DescribeApplicationSnapshotRequest `request:"mediaType=application/json"`
}

type DescribeApplicationSnapshotResponse struct {
	ContentType                         string
	DescribeApplicationSnapshotResponse *shared.DescribeApplicationSnapshotResponse
	InvalidArgumentException            *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
	UnsupportedOperationException       *interface{}
}
