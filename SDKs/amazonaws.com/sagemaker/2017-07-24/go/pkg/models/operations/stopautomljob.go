package operations

import (
	"openapi/pkg/models/shared"
)

type StopAutoMlJobXAmzTargetEnum string

const (
	StopAutoMlJobXAmzTargetEnumSageMakerStopAutoMlJob StopAutoMlJobXAmzTargetEnum = "SageMaker.StopAutoMLJob"
)

type StopAutoMlJobHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopAutoMlJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopAutoMlJobRequest struct {
	Headers StopAutoMlJobHeaders
	Request shared.StopAutoMlJobRequest `request:"mediaType=application/json"`
}

type StopAutoMlJobResponse struct {
	ContentType      string
	ResourceNotFound *interface{}
	StatusCode       int64
}
