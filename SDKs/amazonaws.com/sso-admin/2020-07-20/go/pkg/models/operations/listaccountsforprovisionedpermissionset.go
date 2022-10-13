package operations

import (
	"openapi/pkg/models/shared"
)

type ListAccountsForProvisionedPermissionSetQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAccountsForProvisionedPermissionSetXAmzTargetEnum string

const (
	ListAccountsForProvisionedPermissionSetXAmzTargetEnumSwbExternalServiceListAccountsForProvisionedPermissionSet ListAccountsForProvisionedPermissionSetXAmzTargetEnum = "SWBExternalService.ListAccountsForProvisionedPermissionSet"
)

type ListAccountsForProvisionedPermissionSetHeaders struct {
	XAmzAlgorithm     *string                                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAccountsForProvisionedPermissionSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAccountsForProvisionedPermissionSetRequest struct {
	QueryParams ListAccountsForProvisionedPermissionSetQueryParams
	Headers     ListAccountsForProvisionedPermissionSetHeaders
	Request     shared.ListAccountsForProvisionedPermissionSetRequest `request:"mediaType=application/json"`
}

type ListAccountsForProvisionedPermissionSetResponse struct {
	AccessDeniedException                           *interface{}
	ContentType                                     string
	InternalServerException                         *interface{}
	ListAccountsForProvisionedPermissionSetResponse *shared.ListAccountsForProvisionedPermissionSetResponse
	ResourceNotFoundException                       *interface{}
	StatusCode                                      int64
	ThrottlingException                             *interface{}
	ValidationException                             *interface{}
}
