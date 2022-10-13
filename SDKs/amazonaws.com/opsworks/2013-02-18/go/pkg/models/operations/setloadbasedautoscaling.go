package operations

import (
	"openapi/pkg/models/shared"
)

type SetLoadBasedAutoScalingXAmzTargetEnum string

const (
	SetLoadBasedAutoScalingXAmzTargetEnumOpsWorks20130218SetLoadBasedAutoScaling SetLoadBasedAutoScalingXAmzTargetEnum = "OpsWorks_20130218.SetLoadBasedAutoScaling"
)

type SetLoadBasedAutoScalingHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SetLoadBasedAutoScalingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SetLoadBasedAutoScalingRequest struct {
	Headers SetLoadBasedAutoScalingHeaders
	Request shared.SetLoadBasedAutoScalingRequest `request:"mediaType=application/json"`
}

type SetLoadBasedAutoScalingResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
