package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteStackXAmzTargetEnum string

const (
	DeleteStackXAmzTargetEnumOpsWorks20130218DeleteStack DeleteStackXAmzTargetEnum = "OpsWorks_20130218.DeleteStack"
)

type DeleteStackHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteStackXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteStackRequest struct {
	Headers DeleteStackHeaders
	Request shared.DeleteStackRequest `request:"mediaType=application/json"`
}

type DeleteStackResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
