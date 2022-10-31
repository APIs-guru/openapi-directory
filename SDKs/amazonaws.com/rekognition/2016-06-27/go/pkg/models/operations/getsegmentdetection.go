package operations

import (
	"openapi/pkg/models/shared"
)

type GetSegmentDetectionQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetSegmentDetectionXAmzTargetEnum string

const (
	GetSegmentDetectionXAmzTargetEnumRekognitionServiceGetSegmentDetection GetSegmentDetectionXAmzTargetEnum = "RekognitionService.GetSegmentDetection"
)

type GetSegmentDetectionHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSegmentDetectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetSegmentDetectionRequest struct {
	QueryParams GetSegmentDetectionQueryParams
	Headers     GetSegmentDetectionHeaders
	Request     shared.GetSegmentDetectionRequest `request:"mediaType=application/json"`
}

type GetSegmentDetectionResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	GetSegmentDetectionResponse            *shared.GetSegmentDetectionResponse
	InternalServerError                    *interface{}
	InvalidPaginationTokenException        *interface{}
	InvalidParameterException              *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
