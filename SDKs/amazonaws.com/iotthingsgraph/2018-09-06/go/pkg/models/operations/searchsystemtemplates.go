package operations

import (
	"openapi/pkg/models/shared"
)

type SearchSystemTemplatesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type SearchSystemTemplatesXAmzTargetEnum string

const (
	SearchSystemTemplatesXAmzTargetEnumIotThingsGraphFrontEndServiceSearchSystemTemplates SearchSystemTemplatesXAmzTargetEnum = "IotThingsGraphFrontEndService.SearchSystemTemplates"
)

type SearchSystemTemplatesHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SearchSystemTemplatesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SearchSystemTemplatesRequest struct {
	QueryParams SearchSystemTemplatesQueryParams
	Headers     SearchSystemTemplatesHeaders
	Request     shared.SearchSystemTemplatesRequest `request:"mediaType=application/json"`
}

type SearchSystemTemplatesResponse struct {
	ContentType                   string
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	SearchSystemTemplatesResponse *shared.SearchSystemTemplatesResponse
	StatusCode                    int64
	ThrottlingException           *interface{}
}
