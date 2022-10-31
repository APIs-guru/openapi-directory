package operations

import (
	"openapi/pkg/models/shared"
)

type GetTextDetectionQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetTextDetectionXAmzTargetEnum string

const (
	GetTextDetectionXAmzTargetEnumRekognitionServiceGetTextDetection GetTextDetectionXAmzTargetEnum = "RekognitionService.GetTextDetection"
)

type GetTextDetectionHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetTextDetectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetTextDetectionRequest struct {
	QueryParams GetTextDetectionQueryParams
	Headers     GetTextDetectionHeaders
	Request     shared.GetTextDetectionRequest `request:"mediaType=application/json"`
}

type GetTextDetectionResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	GetTextDetectionResponse               *shared.GetTextDetectionResponse
	InternalServerError                    *interface{}
	InvalidPaginationTokenException        *interface{}
	InvalidParameterException              *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
