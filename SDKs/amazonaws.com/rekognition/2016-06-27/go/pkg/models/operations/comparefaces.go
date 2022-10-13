package operations

import (
	"openapi/pkg/models/shared"
)

type CompareFacesXAmzTargetEnum string

const (
	CompareFacesXAmzTargetEnumRekognitionServiceCompareFaces CompareFacesXAmzTargetEnum = "RekognitionService.CompareFaces"
)

type CompareFacesHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CompareFacesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CompareFacesRequest struct {
	Headers CompareFacesHeaders
	Request shared.CompareFacesRequest `request:"mediaType=application/json"`
}

type CompareFacesResponse struct {
	AccessDeniedException                  *interface{}
	CompareFacesResponse                   *shared.CompareFacesResponse
	ContentType                            string
	ImageTooLargeException                 *interface{}
	InternalServerError                    *interface{}
	InvalidImageFormatException            *interface{}
	InvalidParameterException              *interface{}
	InvalidS3ObjectException               *interface{}
	ProvisionedThroughputExceededException *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
