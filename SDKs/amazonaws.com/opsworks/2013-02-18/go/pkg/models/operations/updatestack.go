package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateStackXAmzTargetEnum string

const (
	UpdateStackXAmzTargetEnumOpsWorks20130218UpdateStack UpdateStackXAmzTargetEnum = "OpsWorks_20130218.UpdateStack"
)

type UpdateStackHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateStackXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateStackRequest struct {
	Headers UpdateStackHeaders
	Request shared.UpdateStackRequest `request:"mediaType=application/json"`
}

type UpdateStackResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
