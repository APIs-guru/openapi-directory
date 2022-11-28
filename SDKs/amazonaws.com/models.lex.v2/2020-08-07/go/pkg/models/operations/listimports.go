package operations

import (
	"openapi/pkg/models/shared"
)

type ListImportsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListImportsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// ListImportsRequestBodySortBy
// Provides information for sorting a list of imports.
type ListImportsRequestBodySortBy struct {
	Attribute *shared.ImportSortAttributeEnum `json:"attribute,omitempty"`
	Order     *shared.SortOrderEnum           `json:"order,omitempty"`
}

type ListImportsRequestBody struct {
	BotID      *string                       `json:"botId,omitempty"`
	BotVersion *string                       `json:"botVersion,omitempty"`
	Filters    []shared.ImportFilter         `json:"filters,omitempty"`
	MaxResults *int64                        `json:"maxResults,omitempty"`
	NextToken  *string                       `json:"nextToken,omitempty"`
	SortBy     *ListImportsRequestBodySortBy `json:"sortBy,omitempty"`
}

type ListImportsRequest struct {
	QueryParams ListImportsQueryParams
	Headers     ListImportsHeaders
	Request     ListImportsRequestBody `request:"mediaType=application/json"`
}

type ListImportsResponse struct {
	ContentType             string
	InternalServerException *interface{}
	ListImportsResponse     *shared.ListImportsResponse
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
