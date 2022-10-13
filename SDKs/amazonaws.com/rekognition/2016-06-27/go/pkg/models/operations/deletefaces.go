package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFacesXAmzTargetEnum string

const (
	DeleteFacesXAmzTargetEnumRekognitionServiceDeleteFaces DeleteFacesXAmzTargetEnum = "RekognitionService.DeleteFaces"
)

type DeleteFacesHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteFacesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteFacesRequest struct {
	Headers DeleteFacesHeaders
	Request shared.DeleteFacesRequest `request:"mediaType=application/json"`
}

type DeleteFacesResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	DeleteFacesResponse                    *shared.DeleteFacesResponse
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
