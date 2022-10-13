package operations

import (
	"openapi/pkg/models/shared"
)

type ListFacesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListFacesXAmzTargetEnum string

const (
	ListFacesXAmzTargetEnumRekognitionServiceListFaces ListFacesXAmzTargetEnum = "RekognitionService.ListFaces"
)

type ListFacesHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListFacesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListFacesRequest struct {
	QueryParams ListFacesQueryParams
	Headers     ListFacesHeaders
	Request     shared.ListFacesRequest `request:"mediaType=application/json"`
}

type ListFacesResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	InternalServerError                    *interface{}
	InvalidPaginationTokenException        *interface{}
	InvalidParameterException              *interface{}
	ListFacesResponse                      *shared.ListFacesResponse
	ProvisionedThroughputExceededException *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
