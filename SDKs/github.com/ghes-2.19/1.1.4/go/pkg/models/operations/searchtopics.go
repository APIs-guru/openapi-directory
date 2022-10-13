package operations

import (
	"openapi/pkg/models/shared"
)

type SearchTopicsQueryParams struct {
	Q string `queryParam:"style=form,explode=true,name=q"`
}

type SearchTopicsRequest struct {
	QueryParams SearchTopicsQueryParams
}

type SearchTopics200ApplicationJSON struct {
	IncompleteResults bool                           `json:"incomplete_results"`
	Items             []shared.TopicSearchResultItem `json:"items"`
	TotalCount        int64                          `json:"total_count"`
}

type SearchTopics415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type SearchTopicsResponse struct {
	ContentType                          string
	StatusCode                           int64
	SearchTopics200ApplicationJSONObject *SearchTopics200ApplicationJSON
	SearchTopics415ApplicationJSONObject *SearchTopics415ApplicationJSON
}
