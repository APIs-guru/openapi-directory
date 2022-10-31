package operations

import (
	"openapi/pkg/models/shared"
)

type CompareFacesXAmzTargetEnum string

const (
	CompareFacesXAmzTargetEnumRekognitionServiceCompareFaces CompareFacesXAmzTargetEnum = "RekognitionService.CompareFaces"
)

type CompareFacesHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CompareFacesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
