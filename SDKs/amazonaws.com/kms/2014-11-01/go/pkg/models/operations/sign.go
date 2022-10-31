package operations

import (
	"openapi/pkg/models/shared"
)

type SignXAmzTargetEnum string

const (
	SignXAmzTargetEnumTrentServiceSign SignXAmzTargetEnum = "TrentService.Sign"
)

type SignHeaders struct {
	XAmzAlgorithm     *string            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        SignXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
