package operations

import (
	"openapi/pkg/models/shared"
)

type ListPermissionSetsProvisionedToAccountQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPermissionSetsProvisionedToAccountXAmzTargetEnum string

const (
	ListPermissionSetsProvisionedToAccountXAmzTargetEnumSwbExternalServiceListPermissionSetsProvisionedToAccount ListPermissionSetsProvisionedToAccountXAmzTargetEnum = "SWBExternalService.ListPermissionSetsProvisionedToAccount"
)

type ListPermissionSetsProvisionedToAccountHeaders struct {
	XAmzAlgorithm     *string                                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPermissionSetsProvisionedToAccountXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListPermissionSetsProvisionedToAccountRequest struct {
	QueryParams ListPermissionSetsProvisionedToAccountQueryParams
	Headers     ListPermissionSetsProvisionedToAccountHeaders
	Request     shared.ListPermissionSetsProvisionedToAccountRequest `request:"mediaType=application/json"`
}

type ListPermissionSetsProvisionedToAccountResponse struct {
	AccessDeniedException                          *interface{}
	ContentType                                    string
	InternalServerException                        *interface{}
	ListPermissionSetsProvisionedToAccountResponse *shared.ListPermissionSetsProvisionedToAccountResponse
	ResourceNotFoundException                      *interface{}
	StatusCode                                     int64
	ThrottlingException                            *interface{}
	ValidationException                            *interface{}
}
