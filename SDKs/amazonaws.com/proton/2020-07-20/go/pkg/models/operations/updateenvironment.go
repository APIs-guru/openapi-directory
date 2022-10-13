package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEnvironmentXAmzTargetEnum string

const (
	UpdateEnvironmentXAmzTargetEnumAwsProton20200720UpdateEnvironment UpdateEnvironmentXAmzTargetEnum = "AwsProton20200720.UpdateEnvironment"
)

type UpdateEnvironmentHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateEnvironmentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateEnvironmentRequest struct {
	Headers UpdateEnvironmentHeaders
	Request shared.UpdateEnvironmentInput `request:"mediaType=application/json"`
}

type UpdateEnvironmentResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	UpdateEnvironmentOutput   *shared.UpdateEnvironmentOutput
	ValidationException       *interface{}
}
