package operations

import (
	"openapi/pkg/models/shared"
)

type SignXAmzTargetEnum string

const (
	SignXAmzTargetEnumTrentServiceSign SignXAmzTargetEnum = "TrentService.Sign"
)

type SignHeaders struct {
	XAmzAlgorithm     *string            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string            `header:"name=X-Amz-Credential"`
	XAmzDate          *string            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SignXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SignRequest struct {
	Headers SignHeaders
	Request shared.SignRequest `request:"mediaType=application/json"`
}

type SignResponse struct {
	ContentType                string
	DependencyTimeoutException *interface{}
	DisabledException          *interface{}
	InvalidGrantTokenException *interface{}
	InvalidKeyUsageException   *interface{}
	KmsInternalException       *interface{}
	KmsInvalidStateException   *interface{}
	KeyUnavailableException    *interface{}
	NotFoundException          *interface{}
	SignResponse               *shared.SignResponse
	StatusCode                 int64
}
