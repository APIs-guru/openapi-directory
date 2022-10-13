package operations

import (
	"openapi/pkg/models/shared"
)

type DetectFacesXAmzTargetEnum string

const (
	DetectFacesXAmzTargetEnumRekognitionServiceDetectFaces DetectFacesXAmzTargetEnum = "RekognitionService.DetectFaces"
)

type DetectFacesHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DetectFacesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DetectFacesRequest struct {
	Headers DetectFacesHeaders
	Request shared.DetectFacesRequest `request:"mediaType=application/json"`
}

type DetectFacesResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	DetectFacesResponse                    *shared.DetectFacesResponse
	ImageTooLargeException                 *interface{}
	InternalServerError                    *interface{}
	InvalidImageFormatException            *interface{}
	InvalidParameterException              *interface{}
	InvalidS3ObjectException               *interface{}
	ProvisionedThroughputExceededException *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
