package operations

import (
	"openapi/pkg/models/shared"
)

type AssignVolumeXAmzTargetEnum string

const (
	AssignVolumeXAmzTargetEnumOpsWorks20130218AssignVolume AssignVolumeXAmzTargetEnum = "OpsWorks_20130218.AssignVolume"
)

type AssignVolumeHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AssignVolumeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AssignVolumeRequest struct {
	Headers AssignVolumeHeaders
	Request shared.AssignVolumeRequest `request:"mediaType=application/json"`
}

type AssignVolumeResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
