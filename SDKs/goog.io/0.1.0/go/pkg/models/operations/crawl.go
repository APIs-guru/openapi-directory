package operations

import (
	"openapi/pkg/models/shared"
)

type CrawlPathParams struct {
	Query string `pathParam:"style=simple,explode=false,name=query"`
}

type CrawlRequest struct {
	PathParams CrawlPathParams
}

type Crawl200ApplicationJSON struct {
	Answer  *string  `json:"answer"`
	Results []string `json:"results"`
	Total   *string  `json:"total"`
}

type CrawlResponse struct {
	ContentType                   string
	Crawl200ApplicationJSONObject *Crawl200ApplicationJSON
	HTTPValidationError           *shared.HTTPValidationError
	StatusCode                    int64
}
