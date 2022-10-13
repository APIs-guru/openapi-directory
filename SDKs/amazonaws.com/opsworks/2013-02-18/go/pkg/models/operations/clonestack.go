package operations

import (
	"openapi/pkg/models/shared"
)

type CloneStackXAmzTargetEnum string

const (
	CloneStackXAmzTargetEnumOpsWorks20130218CloneStack CloneStackXAmzTargetEnum = "OpsWorks_20130218.CloneStack"
)

type CloneStackHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CloneStackXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CloneStackRequest struct {
	Headers CloneStackHeaders
	Request shared.CloneStackRequest `request:"mediaType=application/json"`
}

type CloneStackResponse struct {
	CloneStackResult          *shared.CloneStackResult
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
