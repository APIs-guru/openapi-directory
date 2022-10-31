package operations

import (
	"openapi/pkg/models/shared"
)

type VerifyXAmzTargetEnum string

const (
	VerifyXAmzTargetEnumTrentServiceVerify VerifyXAmzTargetEnum = "TrentService.Verify"
)

type VerifyHeaders struct {
	XAmzAlgorithm     *string              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        VerifyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type VerifyRequest struct {
	Headers VerifyHeaders
	Request shared.VerifyRequest `request:"mediaType=application/json"`
}

type VerifyResponse struct {
	ContentType                  string
	DependencyTimeoutException   *interface{}
	DisabledException            *interface{}
	InvalidGrantTokenException   *interface{}
	InvalidKeyUsageException     *interface{}
	KmsInternalException         *interface{}
	KmsInvalidSignatureException *interface{}
	KmsInvalidStateException     *interface{}
	KeyUnavailableException      *interface{}
	NotFoundException            *interface{}
	StatusCode                   int64
	VerifyResponse               *shared.VerifyResponse
}
