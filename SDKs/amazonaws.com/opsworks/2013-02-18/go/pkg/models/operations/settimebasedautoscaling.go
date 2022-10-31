package operations

import (
	"openapi/pkg/models/shared"
)

type SetTimeBasedAutoScalingXAmzTargetEnum string

const (
	SetTimeBasedAutoScalingXAmzTargetEnumOpsWorks20130218SetTimeBasedAutoScaling SetTimeBasedAutoScalingXAmzTargetEnum = "OpsWorks_20130218.SetTimeBasedAutoScaling"
)

type SetTimeBasedAutoScalingHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        SetTimeBasedAutoScalingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
