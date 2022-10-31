package shared

import (
	"time"
)

type TopicSearchResultItemAliasesTopicRelation struct {
	ID           *int64  `json:"id,omitempty"`
	Name         *string `json:"name,omitempty"`
	RelationType *string `json:"relation_type,omitempty"`
	TopicID      *int64  `json:"topic_id,omitempty"`
}

type TopicSearchResultItemAliases struct {
	TopicRelation *TopicSearchResultItemAliasesTopicRelation `json:"topic_relation,omitempty"`
}

type TopicSearchResultItemRelatedTopicRelation struct {
	ID           *int64  `json:"id,omitempty"`
	Name         *string `json:"name,omitempty"`
	RelationType *string `json:"relation_type,omitempty"`
	TopicID      *int64  `json:"topic_id,omitempty"`
}

type TopicSearchResultItemRelated struct {
	TopicRelation *TopicSearchResultItemRelatedTopicRelation `json:"topic_relation,omitempty"`
}

type TopicSearchResultItem struct {
	Aliases          []TopicSearchResultItemAliases `json:"aliases,omitempty"`
	CreatedAt        time.Time                      `json:"created_at"`
	CreatedBy        string                         `json:"created_by"`
	Curated          bool                           `json:"curated"`
	Description      string                         `json:"description"`
	DisplayName      string                         `json:"display_name"`
	Featured         bool                           `json:"featured"`
	LogoURL          *string                        `json:"logo_url,omitempty"`
	Name             string                         `json:"name"`
	Related          []TopicSearchResultItemRelated `json:"related,omitempty"`
	Released         string                         `json:"released"`
	RepositoryCount  *int64                         `json:"repository_count,omitempty"`
	Score            int64                          `json:"score"`
	ShortDescription string                         `json:"short_description"`
	TextMatches      []SearchResultTextMatches      `json:"text_matches,omitempty"`
	UpdatedAt        time.Time                      `json:"updated_at"`
}
