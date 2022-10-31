package operations

import (
	"openapi/pkg/models/shared"
)

type GetInlinePolicyForPermissionSetXAmzTargetEnum string

const (
	GetInlinePolicyForPermissionSetXAmzTargetEnumSwbExternalServiceGetInlinePolicyForPermissionSet GetInlinePolicyForPermissionSetXAmzTargetEnum = "SWBExternalService.GetInlinePolicyForPermissionSet"
)

type GetInlinePolicyForPermissionSetHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetInlinePolicyForPermissionSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetInlinePolicyForPermissionSetRequest struct {
	Headers GetInlinePolicyForPermissionSetHeaders
	Request shared.GetInlinePolicyForPermissionSetRequest `request:"mediaType=application/json"`
}

type GetInlinePolicyForPermissionSetResponse struct {
	AccessDeniedException                   *interface{}
	ContentType                             string
	GetInlinePolicyForPermissionSetResponse *shared.GetInlinePolicyForPermissionSetResponse
	InternalServerException                 *interface{}
	ResourceNotFoundException               *interface{}
	StatusCode                              int64
	ThrottlingException                     *interface{}
	ValidationException                     *interface{}
}
