package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGrantXAmzTargetEnum string

const (
	CreateGrantXAmzTargetEnumTrentServiceCreateGrant CreateGrantXAmzTargetEnum = "TrentService.CreateGrant"
)

type CreateGrantHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateGrantXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateGrantRequest struct {
	Headers CreateGrantHeaders
	Request shared.CreateGrantRequest `request:"mediaType=application/json"`
}

type CreateGrantResponse struct {
	ContentType                string
	CreateGrantResponse        *shared.CreateGrantResponse
	DependencyTimeoutException *interface{}
	DisabledException          *interface{}
	InvalidArnException        *interface{}
	InvalidGrantTokenException *interface{}
	KmsInternalException       *interface{}
	KmsInvalidStateException   *interface{}
	LimitExceededException     *interface{}
	NotFoundException          *interface{}
	StatusCode                 int64
}
