package operations

import (
	"openapi/pkg/models/shared"
)

type SetLoadBasedAutoScalingXAmzTargetEnum string

const (
	SetLoadBasedAutoScalingXAmzTargetEnumOpsWorks20130218SetLoadBasedAutoScaling SetLoadBasedAutoScalingXAmzTargetEnum = "OpsWorks_20130218.SetLoadBasedAutoScaling"
)

type SetLoadBasedAutoScalingHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        SetLoadBasedAutoScalingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
