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
	Guidislink      *string `json:"guidislink,omitempty"`
	ID              *string `json:"id,omitempty"`
	Link            *string `json:"link,omitempty"`
	Links           *string `json:"links,omitempty"`
	Published       *string `json:"published,omitempty"`
	PublishedParsed *string `json:"published_parsed,omitempty"`
	Source          *string `json:"source,omitempty"`
	SubArticles     *string `json:"sub_articles,omitempty"`
	Summary         *string `json:"summary,omitempty"`
	SummaryDetail   *string `json:"summary_detail,omitempty"`
	Title           *string `json:"title,omitempty"`
	TitleDetail     *string `json:"title_detail,omitempty"`
}

type News200ApplicationJSONFeed struct {
	Generator       *string `json:"generator,omitempty"`
	GeneratorDetail *string `json:"generator_detail,omitempty"`
	Language        *string `json:"language,omitempty"`
	Link            *string `json:"link,omitempty"`
	Links           *string `json:"links,omitempty"`
	Publisher       *string `json:"publisher,omitempty"`
	PublisherDetail *string `json:"publisher_detail,omitempty"`
	Rights          *string `json:"rights,omitempty"`
	RightsDetail    *string `json:"rights_detail,omitempty"`
	Subtitle        *string `json:"subtitle,omitempty"`
	SubtitleDetail  *string `json:"subtitle_detail,omitempty"`
	Title           *string `json:"title,omitempty"`
	Updated         *string `json:"updated,omitempty"`
	UpdatedParsed   *string `json:"updated_parsed,omitempty"`
}

type News200ApplicationJSON struct {
	Entries []News200ApplicationJSONEntries `json:"entries,omitempty"`
	Feed    *News200ApplicationJSONFeed     `json:"feed,omitempty"`
}

type NewsResponse struct {
	ContentType                  string
	HTTPValidationError          *shared.HTTPValidationError
	News200ApplicationJSONObject *News200ApplicationJSON
	StatusCode                   int64
}
