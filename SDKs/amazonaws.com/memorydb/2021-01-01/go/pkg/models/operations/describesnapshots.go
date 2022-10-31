package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSnapshotsXAmzTargetEnum string

const (
	DescribeSnapshotsXAmzTargetEnumAmazonMemoryDbDescribeSnapshots DescribeSnapshotsXAmzTargetEnum = "AmazonMemoryDB.DescribeSnapshots"
)

type DescribeSnapshotsHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSnapshotsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
