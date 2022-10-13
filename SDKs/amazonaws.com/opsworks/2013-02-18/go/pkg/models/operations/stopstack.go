package operations

import (
	"openapi/pkg/models/shared"
)

type StopStackXAmzTargetEnum string

const (
	StopStackXAmzTargetEnumOpsWorks20130218StopStack StopStackXAmzTargetEnum = "OpsWorks_20130218.StopStack"
)

type StopStackHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopStackXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopStackRequest struct {
	Headers StopStackHeaders
	Request shared.StopStackRequest `request:"mediaType=application/json"`
}

type StopStackResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
