package shared

import (
	"time"
)

type CodeSearchResultItem struct {
	FileSize       *int64                    `json:"file_size"`
	GitURL         string                    `json:"git_url"`
	HTMLURL        string                    `json:"html_url"`
	Language       *string                   `json:"language"`
	LastModifiedAt *time.Time                `json:"last_modified_at"`
	LineNumbers    []string                  `json:"line_numbers"`
	Name           string                    `json:"name"`
	Path           string                    `json:"path"`
	Repository     MinimalRepository         `json:"repository"`
	Score          float64                   `json:"score"`
	Sha            string                    `json:"sha"`
	TextMatches    []SearchResultTextMatches `json:"text_matches"`
	URL            string                    `json:"url"`
}
