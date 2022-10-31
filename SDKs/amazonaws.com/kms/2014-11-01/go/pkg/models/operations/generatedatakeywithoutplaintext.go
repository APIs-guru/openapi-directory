package operations

import (
	"openapi/pkg/models/shared"
)

type GenerateDataKeyWithoutPlaintextXAmzTargetEnum string

const (
	GenerateDataKeyWithoutPlaintextXAmzTargetEnumTrentServiceGenerateDataKeyWithoutPlaintext GenerateDataKeyWithoutPlaintextXAmzTargetEnum = "TrentService.GenerateDataKeyWithoutPlaintext"
)

type GenerateDataKeyWithoutPlaintextHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GenerateDataKeyWithoutPlaintextXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GenerateDataKeyWithoutPlaintextRequest struct {
	Headers GenerateDataKeyWithoutPlaintextHeaders
	Request shared.GenerateDataKeyWithoutPlaintextRequest `request:"mediaType=application/json"`
}

type GenerateDataKeyWithoutPlaintextResponse struct {
	ContentType                             string
	DependencyTimeoutException              *interface{}
	DisabledException                       *interface{}
	GenerateDataKeyWithoutPlaintextResponse *shared.GenerateDataKeyWithoutPlaintextResponse
	InvalidGrantTokenException              *interface{}
	InvalidKeyUsageException                *interface{}
	KmsInternalException                    *interface{}
	KmsInvalidStateException                *interface{}
	KeyUnavailableException                 *interface{}
	NotFoundException                       *interface{}
	StatusCode                              int64
}
