package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAliasXAmzTargetEnum string

const (
	UpdateAliasXAmzTargetEnumTrentServiceUpdateAlias UpdateAliasXAmzTargetEnum = "TrentService.UpdateAlias"
)

type UpdateAliasHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAliasXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateAliasRequest struct {
	Headers UpdateAliasHeaders
	Request shared.UpdateAliasRequest `request:"mediaType=application/json"`
}

type UpdateAliasResponse struct {
	ContentType                string
	DependencyTimeoutException *interface{}
	KmsInternalException       *interface{}
	KmsInvalidStateException   *interface{}
	LimitExceededException     *interface{}
	NotFoundException          *interface{}
	StatusCode                 int64
}
