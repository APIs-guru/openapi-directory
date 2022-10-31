package operations

import (
	"openapi/pkg/models/shared"
)

type ListAccountAssignmentDeletionStatusQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAccountAssignmentDeletionStatusXAmzTargetEnum string

const (
	ListAccountAssignmentDeletionStatusXAmzTargetEnumSwbExternalServiceListAccountAssignmentDeletionStatus ListAccountAssignmentDeletionStatusXAmzTargetEnum = "SWBExternalService.ListAccountAssignmentDeletionStatus"
)

type ListAccountAssignmentDeletionStatusHeaders struct {
	XAmzAlgorithm     *string                                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAccountAssignmentDeletionStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListAccountAssignmentDeletionStatusRequest struct {
	QueryParams ListAccountAssignmentDeletionStatusQueryParams
	Headers     ListAccountAssignmentDeletionStatusHeaders
	Request     shared.ListAccountAssignmentDeletionStatusRequest `request:"mediaType=application/json"`
}

type ListAccountAssignmentDeletionStatusResponse struct {
	AccessDeniedException                       *interface{}
	ContentType                                 string
	InternalServerException                     *interface{}
	ListAccountAssignmentDeletionStatusResponse *shared.ListAccountAssignmentDeletionStatusResponse
	ResourceNotFoundException                   *interface{}
	StatusCode                                  int64
	ThrottlingException                         *interface{}
	ValidationException                         *interface{}
}
