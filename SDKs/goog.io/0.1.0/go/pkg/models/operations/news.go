package operations

import (
	"openapi/pkg/models/shared"
)

type NewsPathParams struct {
	Query string `pathParam:"style=simple,explode=false,name=query"`
}

type NewsRequest struct {
	PathParams NewsPathParams
}

type News200ApplicationJSONEntries struct {
	Guidislink      *string `json:"guidislink"`
	ID              *string `json:"id"`
	Link            *string `json:"link"`
	Links           *string `json:"links"`
	Published       *string `json:"published"`
	PublishedParsed *string `json:"published_parsed"`
	Source          *string `json:"source"`
	SubArticles     *string `json:"sub_articles"`
	Summary         *string `json:"summary"`
	SummaryDetail   *string `json:"summary_detail"`
	Title           *string `json:"title"`
	TitleDetail     *string `json:"title_detail"`
}

type News200ApplicationJSONFeed struct {
	Generator       *string `json:"generator"`
	GeneratorDetail *string `json:"generator_detail"`
	Language        *string `json:"language"`
	Link            *string `json:"link"`
	Links           *string `json:"links"`
	Publisher       *string `json:"publisher"`
	PublisherDetail *string `json:"publisher_detail"`
	Rights          *string `json:"rights"`
	RightsDetail    *string `json:"rights_detail"`
	Subtitle        *string `json:"subtitle"`
	SubtitleDetail  *string `json:"subtitle_detail"`
	Title           *string `json:"title"`
	Updated         *string `json:"updated"`
	UpdatedParsed   *string `json:"updated_parsed"`
}

type News200ApplicationJSON struct {
	Entries []News200ApplicationJSONEntries `json:"entries"`
	Feed    *News200ApplicationJSONFeed     `json:"feed"`
}

type NewsResponse struct {
	ContentType                  string
	HTTPValidationError          *shared.HTTPValidationError
	News200ApplicationJSONObject *News200ApplicationJSON
	StatusCode                   int64
}
