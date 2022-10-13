package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteImportedKeyMaterialXAmzTargetEnum string

const (
	DeleteImportedKeyMaterialXAmzTargetEnumTrentServiceDeleteImportedKeyMaterial DeleteImportedKeyMaterialXAmzTargetEnum = "TrentService.DeleteImportedKeyMaterial"
)

type DeleteImportedKeyMaterialHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteImportedKeyMaterialXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteImportedKeyMaterialRequest struct {
	Headers DeleteImportedKeyMaterialHeaders
	Request shared.DeleteImportedKeyMaterialRequest `request:"mediaType=application/json"`
}

type DeleteImportedKeyMaterialResponse struct {
	ContentType                   string
	DependencyTimeoutException    *interface{}
	InvalidArnException           *interface{}
	KmsInternalException          *interface{}
	KmsInvalidStateException      *interface{}
	NotFoundException             *interface{}
	StatusCode                    int64
	UnsupportedOperationException *interface{}
}
