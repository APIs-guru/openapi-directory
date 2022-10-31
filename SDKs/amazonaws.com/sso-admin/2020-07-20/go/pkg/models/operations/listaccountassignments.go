package operations

import (
	"openapi/pkg/models/shared"
)

type ListAccountAssignmentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAccountAssignmentsXAmzTargetEnum string

const (
	ListAccountAssignmentsXAmzTargetEnumSwbExternalServiceListAccountAssignments ListAccountAssignmentsXAmzTargetEnum = "SWBExternalService.ListAccountAssignments"
)

type ListAccountAssignmentsHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAccountAssignmentsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListAccountAssignmentsRequest struct {
	QueryParams ListAccountAssignmentsQueryParams
	Headers     ListAccountAssignmentsHeaders
	Request     shared.ListAccountAssignmentsRequest `request:"mediaType=application/json"`
}

type ListAccountAssignmentsResponse struct {
	AccessDeniedException          *interface{}
	ContentType                    string
	InternalServerException        *interface{}
	ListAccountAssignmentsResponse *shared.ListAccountAssignmentsResponse
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	ValidationException            *interface{}
}
