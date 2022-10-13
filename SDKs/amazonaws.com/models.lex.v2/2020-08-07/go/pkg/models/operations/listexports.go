package operations

import (
	"openapi/pkg/models/shared"
)

type ListExportsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListExportsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListExportsRequestBodySortBy struct {
	Attribute *shared.ExportSortAttributeEnum `json:"attribute"`
	Order     *shared.SortOrderEnum           `json:"order"`
}

type ListExportsRequestBody struct {
	BotID      *string                       `json:"botId"`
	BotVersion *string                       `json:"botVersion"`
	Filters    []shared.ExportFilter         `json:"filters"`
	MaxResults *int64                        `json:"maxResults"`
	NextToken  *string                       `json:"nextToken"`
	SortBy     *ListExportsRequestBodySortBy `json:"sortBy"`
}

type ListExportsRequest struct {
	QueryParams ListExportsQueryParams
	Headers     ListExportsHeaders
	Request     ListExportsRequestBody `request:"mediaType=application/json"`
}

type ListExportsResponse struct {
	ContentType             string
	InternalServerException *interface{}
	ListExportsResponse     *shared.ListExportsResponse
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
