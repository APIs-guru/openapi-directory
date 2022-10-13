package operations

import (
	"openapi/pkg/models/shared"
)

type StopEdgePackagingJobXAmzTargetEnum string

const (
	StopEdgePackagingJobXAmzTargetEnumSageMakerStopEdgePackagingJob StopEdgePackagingJobXAmzTargetEnum = "SageMaker.StopEdgePackagingJob"
)

type StopEdgePackagingJobHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopEdgePackagingJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopEdgePackagingJobRequest struct {
	Headers StopEdgePackagingJobHeaders
	Request shared.StopEdgePackagingJobRequest `request:"mediaType=application/json"`
}

type StopEdgePackagingJobResponse struct {
	ContentType string
	StatusCode  int64
}
