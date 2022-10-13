package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSnapshotsXAmzTargetEnum string

const (
	DescribeSnapshotsXAmzTargetEnumAmazonMemoryDbDescribeSnapshots DescribeSnapshotsXAmzTargetEnum = "AmazonMemoryDB.DescribeSnapshots"
)

type DescribeSnapshotsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSnapshotsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeSnapshotsRequest struct {
	Headers DescribeSnapshotsHeaders
	Request shared.DescribeSnapshotsRequest `request:"mediaType=application/json"`
}

type DescribeSnapshotsResponse struct {
	ContentType                          string
	DescribeSnapshotsResponse            *shared.DescribeSnapshotsResponse
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	SnapshotNotFoundFault                *interface{}
	StatusCode                           int64
}
