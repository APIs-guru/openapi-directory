package operations

import (
	"openapi/pkg/models/shared"
)

type SearchFacesByImageXAmzTargetEnum string

const (
	SearchFacesByImageXAmzTargetEnumRekognitionServiceSearchFacesByImage SearchFacesByImageXAmzTargetEnum = "RekognitionService.SearchFacesByImage"
)

type SearchFacesByImageHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        SearchFacesByImageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type SearchFacesByImageRequest struct {
	Headers SearchFacesByImageHeaders
	Request shared.SearchFacesByImageRequest `request:"mediaType=application/json"`
}

type SearchFacesByImageResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	ImageTooLargeException                 *interface{}
	InternalServerError                    *interface{}
	InvalidImageFormatException            *interface{}
	InvalidParameterException              *interface{}
	InvalidS3ObjectException               *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceNotFoundException              *interface{}
	SearchFacesByImageResponse             *shared.SearchFacesByImageResponse
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
