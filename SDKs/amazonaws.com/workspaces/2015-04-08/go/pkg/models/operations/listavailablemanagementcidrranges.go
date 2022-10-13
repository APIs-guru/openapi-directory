package operations

import (
	"openapi/pkg/models/shared"
)

type ListAvailableManagementCidrRangesXAmzTargetEnum string

const (
	ListAvailableManagementCidrRangesXAmzTargetEnumWorkspacesServiceListAvailableManagementCidrRanges ListAvailableManagementCidrRangesXAmzTargetEnum = "WorkspacesService.ListAvailableManagementCidrRanges"
)

type ListAvailableManagementCidrRangesHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAvailableManagementCidrRangesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAvailableManagementCidrRangesRequest struct {
	Headers ListAvailableManagementCidrRangesHeaders
	Request shared.ListAvailableManagementCidrRangesRequest `request:"mediaType=application/json"`
}

type ListAvailableManagementCidrRangesResponse struct {
	AccessDeniedException                   *interface{}
	ContentType                             string
	InvalidParameterValuesException         *interface{}
	ListAvailableManagementCidrRangesResult *shared.ListAvailableManagementCidrRangesResult
	StatusCode                              int64
}
