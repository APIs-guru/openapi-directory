package operations

import (
	"openapi/pkg/models/shared"
)

type GetFaceDetectionQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetFaceDetectionXAmzTargetEnum string

const (
	GetFaceDetectionXAmzTargetEnumRekognitionServiceGetFaceDetection GetFaceDetectionXAmzTargetEnum = "RekognitionService.GetFaceDetection"
)

type GetFaceDetectionHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetFaceDetectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetFaceDetectionRequest struct {
	QueryParams GetFaceDetectionQueryParams
	Headers     GetFaceDetectionHeaders
	Request     shared.GetFaceDetectionRequest `request:"mediaType=application/json"`
}

type GetFaceDetectionResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	GetFaceDetectionResponse               *shared.GetFaceDetectionResponse
	InternalServerError                    *interface{}
	InvalidPaginationTokenException        *interface{}
	InvalidParameterException              *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
