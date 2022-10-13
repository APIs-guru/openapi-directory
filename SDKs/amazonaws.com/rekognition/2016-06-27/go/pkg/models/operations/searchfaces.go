package operations

import (
	"openapi/pkg/models/shared"
)

type SearchFacesXAmzTargetEnum string

const (
	SearchFacesXAmzTargetEnumRekognitionServiceSearchFaces SearchFacesXAmzTargetEnum = "RekognitionService.SearchFaces"
)

type SearchFacesHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SearchFacesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SearchFacesRequest struct {
	Headers SearchFacesHeaders
	Request shared.SearchFacesRequest `request:"mediaType=application/json"`
}

type SearchFacesResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceNotFoundException              *interface{}
	SearchFacesResponse                    *shared.SearchFacesResponse
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
