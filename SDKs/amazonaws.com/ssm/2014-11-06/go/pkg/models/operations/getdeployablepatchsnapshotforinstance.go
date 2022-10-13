package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeployablePatchSnapshotForInstanceXAmzTargetEnum string

const (
	GetDeployablePatchSnapshotForInstanceXAmzTargetEnumAmazonSsmGetDeployablePatchSnapshotForInstance GetDeployablePatchSnapshotForInstanceXAmzTargetEnum = "AmazonSSM.GetDeployablePatchSnapshotForInstance"
)

type GetDeployablePatchSnapshotForInstanceHeaders struct {
	XAmzAlgorithm     *string                                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDeployablePatchSnapshotForInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDeployablePatchSnapshotForInstanceRequest struct {
	Headers GetDeployablePatchSnapshotForInstanceHeaders
	Request shared.GetDeployablePatchSnapshotForInstanceRequest `request:"mediaType=application/json"`
}

type GetDeployablePatchSnapshotForInstanceResponse struct {
	ContentType                                 string
	GetDeployablePatchSnapshotForInstanceResult *shared.GetDeployablePatchSnapshotForInstanceResult
	InternalServerError                         *interface{}
	StatusCode                                  int64
	UnsupportedFeatureRequiredException         *interface{}
	UnsupportedOperatingSystem                  *interface{}
}
