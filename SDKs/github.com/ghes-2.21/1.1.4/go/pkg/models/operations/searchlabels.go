package operations

import (
	"openapi/pkg/models/shared"
)

type SearchLabelsSortEnum string

const (
	SearchLabelsSortEnumCreated SearchLabelsSortEnum = "created"
	SearchLabelsSortEnumUpdated SearchLabelsSortEnum = "updated"
)

type SearchLabelsQueryParams struct {
	Order        *shared.OrderEnum     `queryParam:"style=form,explode=true,name=order"`
	Q            string                `queryParam:"style=form,explode=true,name=q"`
	RepositoryID int64                 `queryParam:"style=form,explode=true,name=repository_id"`
	Sort         *SearchLabelsSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type SearchLabelsRequest struct {
	QueryParams SearchLabelsQueryParams
}

type SearchLabels200ApplicationJSON struct {
	IncompleteResults bool                           `json:"incomplete_results"`
	Items             []shared.LabelSearchResultItem `json:"items"`
	TotalCount        int64                          `json:"total_count"`
}

type SearchLabelsResponse struct {
	ContentType                          string
	StatusCode                           int64
	BasicError                           *shared.BasicError
	SearchLabels200ApplicationJSONObject *SearchLabels200ApplicationJSON
	ValidationError                      *shared.ValidationError
}
