package operations

import (
	"openapi/pkg/models/shared"
)

type CreateApplicationSnapshotXAmzTargetEnum string

const (
	CreateApplicationSnapshotXAmzTargetEnumKinesisAnalytics20180523CreateApplicationSnapshot CreateApplicationSnapshotXAmzTargetEnum = "KinesisAnalytics_20180523.CreateApplicationSnapshot"
)

type CreateApplicationSnapshotHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateApplicationSnapshotXAmzTargetEnum `header:"name=X-Amz-Target"`
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
