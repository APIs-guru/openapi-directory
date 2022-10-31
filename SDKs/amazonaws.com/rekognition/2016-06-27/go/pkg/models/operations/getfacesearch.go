package operations

import (
	"openapi/pkg/models/shared"
)

type GetFaceSearchQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetFaceSearchXAmzTargetEnum string

const (
	GetFaceSearchXAmzTargetEnumRekognitionServiceGetFaceSearch GetFaceSearchXAmzTargetEnum = "RekognitionService.GetFaceSearch"
)

type GetFaceSearchHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetFaceSearchXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetFaceSearchRequest struct {
	QueryParams GetFaceSearchQueryParams
	Headers     GetFaceSearchHeaders
	Request     shared.GetFaceSearchRequest `request:"mediaType=application/json"`
}

type GetFaceSearchResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	GetFaceSearchResponse                  *shared.GetFaceSearchResponse
	InternalServerError                    *interface{}
	InvalidPaginationTokenException        *interface{}
	InvalidParameterException              *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
