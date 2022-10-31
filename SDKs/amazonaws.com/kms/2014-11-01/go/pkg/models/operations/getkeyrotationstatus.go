package operations

import (
	"openapi/pkg/models/shared"
)

type GetKeyRotationStatusXAmzTargetEnum string

const (
	GetKeyRotationStatusXAmzTargetEnumTrentServiceGetKeyRotationStatus GetKeyRotationStatusXAmzTargetEnum = "TrentService.GetKeyRotationStatus"
)

type GetKeyRotationStatusHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetKeyRotationStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetKeyRotationStatusRequest struct {
	Headers GetKeyRotationStatusHeaders
	Request shared.GetKeyRotationStatusRequest `request:"mediaType=application/json"`
}

type GetKeyRotationStatusResponse struct {
	ContentType                   string
	DependencyTimeoutException    *interface{}
	GetKeyRotationStatusResponse  *shared.GetKeyRotationStatusResponse
	InvalidArnException           *interface{}
	KmsInternalException          *interface{}
	KmsInvalidStateException      *interface{}
	NotFoundException             *interface{}
	StatusCode                    int64
	UnsupportedOperationException *interface{}
}
