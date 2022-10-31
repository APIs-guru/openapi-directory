package operations

import (
	"openapi/pkg/models/shared"
)

type SearchQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type SearchXAmzTargetEnum string

const (
	SearchXAmzTargetEnumSageMakerSearch SearchXAmzTargetEnum = "SageMaker.Search"
)

type SearchHeaders struct {
	XAmzAlgorithm     *string              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        SearchXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type SearchRequest struct {
	QueryParams SearchQueryParams
	Headers     SearchHeaders
	Request     shared.SearchRequest `request:"mediaType=application/json"`
}

type SearchResponse struct {
	ContentType    string
	SearchResponse *shared.SearchResponse
	StatusCode     int64
}
