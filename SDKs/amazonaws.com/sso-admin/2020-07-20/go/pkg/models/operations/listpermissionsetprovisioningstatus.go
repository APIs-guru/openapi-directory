package operations

import (
	"openapi/pkg/models/shared"
)

type ListPermissionSetProvisioningStatusQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPermissionSetProvisioningStatusXAmzTargetEnum string

const (
	ListPermissionSetProvisioningStatusXAmzTargetEnumSwbExternalServiceListPermissionSetProvisioningStatus ListPermissionSetProvisioningStatusXAmzTargetEnum = "SWBExternalService.ListPermissionSetProvisioningStatus"
)

type ListPermissionSetProvisioningStatusHeaders struct {
	XAmzAlgorithm     *string                                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPermissionSetProvisioningStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListPermissionSetProvisioningStatusRequest struct {
	QueryParams ListPermissionSetProvisioningStatusQueryParams
	Headers     ListPermissionSetProvisioningStatusHeaders
	Request     shared.ListPermissionSetProvisioningStatusRequest `request:"mediaType=application/json"`
}

type ListPermissionSetProvisioningStatusResponse struct {
	AccessDeniedException                       *interface{}
	ContentType                                 string
	InternalServerException                     *interface{}
	ListPermissionSetProvisioningStatusResponse *shared.ListPermissionSetProvisioningStatusResponse
	ResourceNotFoundException                   *interface{}
	StatusCode                                  int64
	ThrottlingException                         *interface{}
	ValidationException                         *interface{}
}
