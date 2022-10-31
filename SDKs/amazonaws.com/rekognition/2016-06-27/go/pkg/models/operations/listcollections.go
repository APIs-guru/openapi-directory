package operations

import (
	"openapi/pkg/models/shared"
)

type ListCollectionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListCollectionsXAmzTargetEnum string

const (
	ListCollectionsXAmzTargetEnumRekognitionServiceListCollections ListCollectionsXAmzTargetEnum = "RekognitionService.ListCollections"
)

type ListCollectionsHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCollectionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListCollectionsRequest struct {
	QueryParams ListCollectionsQueryParams
	Headers     ListCollectionsHeaders
	Request     shared.ListCollectionsRequest `request:"mediaType=application/json"`
}

type ListCollectionsResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	InternalServerError                    *interface{}
	InvalidPaginationTokenException        *interface{}
	InvalidParameterException              *interface{}
	ListCollectionsResponse                *shared.ListCollectionsResponse
	ProvisionedThroughputExceededException *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
