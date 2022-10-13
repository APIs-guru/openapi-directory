package operations

import (
	"openapi/pkg/models/shared"
)

type ListAccountAssignmentCreationStatusQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAccountAssignmentCreationStatusXAmzTargetEnum string

const (
	ListAccountAssignmentCreationStatusXAmzTargetEnumSwbExternalServiceListAccountAssignmentCreationStatus ListAccountAssignmentCreationStatusXAmzTargetEnum = "SWBExternalService.ListAccountAssignmentCreationStatus"
)

type ListAccountAssignmentCreationStatusHeaders struct {
	XAmzAlgorithm     *string                                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAccountAssignmentCreationStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAccountAssignmentCreationStatusRequest struct {
	QueryParams ListAccountAssignmentCreationStatusQueryParams
	Headers     ListAccountAssignmentCreationStatusHeaders
	Request     shared.ListAccountAssignmentCreationStatusRequest `request:"mediaType=application/json"`
}

type ListAccountAssignmentCreationStatusResponse struct {
	AccessDeniedException                       *interface{}
	ContentType                                 string
	InternalServerException                     *interface{}
	ListAccountAssignmentCreationStatusResponse *shared.ListAccountAssignmentCreationStatusResponse
	ResourceNotFoundException                   *interface{}
	StatusCode                                  int64
	ThrottlingException                         *interface{}
	ValidationException                         *interface{}
}
