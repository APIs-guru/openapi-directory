package operations

import (
	"openapi/pkg/models/shared"
)

type SearchCodeSortEnum string

const (
	SearchCodeSortEnumIndexed SearchCodeSortEnum = "indexed"
)

type SearchCodeQueryParams struct {
	Order   *shared.OrderEnum   `queryParam:"style=form,explode=true,name=order"`
	Page    *int64              `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64              `queryParam:"style=form,explode=true,name=per_page"`
	Q       string              `queryParam:"style=form,explode=true,name=q"`
	Sort    *SearchCodeSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type SearchCodeRequest struct {
	QueryParams SearchCodeQueryParams
}

type SearchCode200ApplicationJSON struct {
	IncompleteResults bool                          `json:"incomplete_results"`
	Items             []shared.CodeSearchResultItem `json:"items"`
	TotalCount        int64                         `json:"total_count"`
}

type SearchCode503ApplicationJSON struct {
	Code             *string `json:"code,omitempty"`
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type SearchCodeResponse struct {
	ContentType                        string
	StatusCode                         int64
	BasicError                         *shared.BasicError
	SearchCode200ApplicationJSONObject *SearchCode200ApplicationJSON
	SearchCode503ApplicationJSONObject *SearchCode503ApplicationJSON
	ValidationError                    *shared.ValidationError
}
