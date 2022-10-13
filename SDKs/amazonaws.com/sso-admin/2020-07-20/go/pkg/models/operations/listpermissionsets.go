package operations

import (
	"openapi/pkg/models/shared"
)

type ListPermissionSetsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPermissionSetsXAmzTargetEnum string

const (
	ListPermissionSetsXAmzTargetEnumSwbExternalServiceListPermissionSets ListPermissionSetsXAmzTargetEnum = "SWBExternalService.ListPermissionSets"
)

type ListPermissionSetsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPermissionSetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListPermissionSetsRequest struct {
	QueryParams ListPermissionSetsQueryParams
	Headers     ListPermissionSetsHeaders
	Request     shared.ListPermissionSetsRequest `request:"mediaType=application/json"`
}

type ListPermissionSetsResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	InternalServerException    *interface{}
	ListPermissionSetsResponse *shared.ListPermissionSetsResponse
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
