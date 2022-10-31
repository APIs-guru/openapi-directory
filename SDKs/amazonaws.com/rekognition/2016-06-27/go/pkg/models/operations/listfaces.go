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
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListFacesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
