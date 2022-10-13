package operations

import (
	"openapi/pkg/models/shared"
)

type SetTimeBasedAutoScalingXAmzTargetEnum string

const (
	SetTimeBasedAutoScalingXAmzTargetEnumOpsWorks20130218SetTimeBasedAutoScaling SetTimeBasedAutoScalingXAmzTargetEnum = "OpsWorks_20130218.SetTimeBasedAutoScaling"
)

type SetTimeBasedAutoScalingHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SetTimeBasedAutoScalingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SetTimeBasedAutoScalingRequest struct {
	Headers SetTimeBasedAutoScalingHeaders
	Request shared.SetTimeBasedAutoScalingRequest `request:"mediaType=application/json"`
}

type SetTimeBasedAutoScalingResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
