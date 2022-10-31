package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateKeyDescriptionXAmzTargetEnum string

const (
	UpdateKeyDescriptionXAmzTargetEnumTrentServiceUpdateKeyDescription UpdateKeyDescriptionXAmzTargetEnum = "TrentService.UpdateKeyDescription"
)

type UpdateKeyDescriptionHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateKeyDescriptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateKeyDescriptionRequest struct {
	Headers UpdateKeyDescriptionHeaders
	Request shared.UpdateKeyDescriptionRequest `request:"mediaType=application/json"`
}

type UpdateKeyDescriptionResponse struct {
	ContentType                string
	DependencyTimeoutException *interface{}
	InvalidArnException        *interface{}
	KmsInternalException       *interface{}
	KmsInvalidStateException   *interface{}
	NotFoundException          *interface{}
	StatusCode                 int64
}
