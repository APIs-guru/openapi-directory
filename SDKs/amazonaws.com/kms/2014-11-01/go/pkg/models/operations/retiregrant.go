package operations

import (
	"openapi/pkg/models/shared"
)

type RetireGrantXAmzTargetEnum string

const (
	RetireGrantXAmzTargetEnumTrentServiceRetireGrant RetireGrantXAmzTargetEnum = "TrentService.RetireGrant"
)

type RetireGrantHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RetireGrantXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RetireGrantRequest struct {
	Headers RetireGrantHeaders
	Request shared.RetireGrantRequest `request:"mediaType=application/json"`
}

type RetireGrantResponse struct {
	ContentType                string
	DependencyTimeoutException *interface{}
	InvalidArnException        *interface{}
	InvalidGrantIDException    *interface{}
	InvalidGrantTokenException *interface{}
	KmsInternalException       *interface{}
	KmsInvalidStateException   *interface{}
	NotFoundException          *interface{}
	StatusCode                 int64
}
