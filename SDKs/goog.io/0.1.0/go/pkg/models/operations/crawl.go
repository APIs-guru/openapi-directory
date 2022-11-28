package operations

import (
	"openapi/pkg/models/shared"
)

type CrawlPathParams struct {
	Query string `pathParam:"style=simple,explode=false,name=query"`
}

type Crawl200ApplicationJSON struct {
	Answer  *string  `json:"answer,omitempty"`
	Results []string `json:"results,omitempty"`
	Total   *string  `json:"total,omitempty"`
}

type CrawlRequest struct {
	PathParams CrawlPathParams
}

type CrawlResponse struct {
	ContentType                   string
	Crawl200ApplicationJSONObject *Crawl200ApplicationJSON
	HTTPValidationError           *shared.HTTPValidationError
	StatusCode                    int64
}
