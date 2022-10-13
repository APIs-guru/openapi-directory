package operations

import (
	"openapi/pkg/models/shared"
)

type StopInstanceXAmzTargetEnum string

const (
	StopInstanceXAmzTargetEnumOpsWorks20130218StopInstance StopInstanceXAmzTargetEnum = "OpsWorks_20130218.StopInstance"
)

type StopInstanceHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopInstanceRequest struct {
	Headers StopInstanceHeaders
	Request shared.StopInstanceRequest `request:"mediaType=application/json"`
}

type StopInstanceResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
