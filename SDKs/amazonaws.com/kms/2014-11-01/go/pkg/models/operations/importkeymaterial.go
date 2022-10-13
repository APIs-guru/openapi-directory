package operations

import (
	"openapi/pkg/models/shared"
)

type ImportKeyMaterialXAmzTargetEnum string

const (
	ImportKeyMaterialXAmzTargetEnumTrentServiceImportKeyMaterial ImportKeyMaterialXAmzTargetEnum = "TrentService.ImportKeyMaterial"
)

type ImportKeyMaterialHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ImportKeyMaterialXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ImportKeyMaterialRequest struct {
	Headers ImportKeyMaterialHeaders
	Request shared.ImportKeyMaterialRequest `request:"mediaType=application/json"`
}

type ImportKeyMaterialResponse struct {
	ContentType                   string
	DependencyTimeoutException    *interface{}
	ExpiredImportTokenException   *interface{}
	ImportKeyMaterialResponse     map[string]interface{}
	IncorrectKeyMaterialException *interface{}
	InvalidArnException           *interface{}
	InvalidCiphertextException    *interface{}
	InvalidImportTokenException   *interface{}
	KmsInternalException          *interface{}
	KmsInvalidStateException      *interface{}
	NotFoundException             *interface{}
	StatusCode                    int64
	UnsupportedOperationException *interface{}
}
