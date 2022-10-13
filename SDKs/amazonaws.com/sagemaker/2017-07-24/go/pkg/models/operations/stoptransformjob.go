package operations

import (
	"openapi/pkg/models/shared"
)

type StopTransformJobXAmzTargetEnum string

const (
	StopTransformJobXAmzTargetEnumSageMakerStopTransformJob StopTransformJobXAmzTargetEnum = "SageMaker.StopTransformJob"
)

type StopTransformJobHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopTransformJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopTransformJobRequest struct {
	Headers StopTransformJobHeaders
	Request shared.StopTransformJobRequest `request:"mediaType=application/json"`
}

type StopTransformJobResponse struct {
	ContentType      string
	ResourceNotFound *interface{}
	StatusCode       int64
}
