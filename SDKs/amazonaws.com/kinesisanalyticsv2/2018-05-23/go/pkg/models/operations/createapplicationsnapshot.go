package operations

import (
	"openapi/pkg/models/shared"
)

type CreateApplicationSnapshotXAmzTargetEnum string

const (
	CreateApplicationSnapshotXAmzTargetEnumKinesisAnalytics20180523CreateApplicationSnapshot CreateApplicationSnapshotXAmzTargetEnum = "KinesisAnalytics_20180523.CreateApplicationSnapshot"
)

type CreateApplicationSnapshotHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateApplicationSnapshotXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateApplicationSnapshotRequest struct {
	Headers CreateApplicationSnapshotHeaders
	Request shared.CreateApplicationSnapshotRequest `request:"mediaType=application/json"`
}

type CreateApplicationSnapshotResponse struct {
	ContentType                              string
	CreateApplicationSnapshotResponse        map[string]interface{}
	InvalidApplicationConfigurationException *interface{}
	InvalidArgumentException                 *interface{}
	InvalidRequestException                  *interface{}
	LimitExceededException                   *interface{}
	ResourceInUseException                   *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
	UnsupportedOperationException            *interface{}
}
