package shared

import (
	"time"
)

type TopicSearchResultItemAliasesTopicRelation struct {
	ID           *int64  `json:"id"`
	Name         *string `json:"name"`
	RelationType *string `json:"relation_type"`
	TopicID      *int64  `json:"topic_id"`
}

type TopicSearchResultItemAliases struct {
	TopicRelation *TopicSearchResultItemAliasesTopicRelation `json:"topic_relation"`
}

type TopicSearchResultItemRelatedTopicRelation struct {
	ID           *int64  `json:"id"`
	Name         *string `json:"name"`
	RelationType *string `json:"relation_type"`
	TopicID      *int64  `json:"topic_id"`
}

type TopicSearchResultItemRelated struct {
	TopicRelation *TopicSearchResultItemRelatedTopicRelation `json:"topic_relation"`
}

type TopicSearchResultItem struct {
	Aliases          []TopicSearchResultItemAliases `json:"aliases"`
	CreatedAt        time.Time                      `json:"created_at"`
	CreatedBy        string                         `json:"created_by"`
	Curated          bool                           `json:"curated"`
	Description      string                         `json:"description"`
	DisplayName      string                         `json:"display_name"`
	Featured         bool                           `json:"featured"`
	LogoURL          *string                        `json:"logo_url"`
	Name             string                         `json:"name"`
	Related          []TopicSearchResultItemRelated `json:"related"`
	Released         string                         `json:"released"`
	RepositoryCount  *int64                         `json:"repository_count"`
	Score            int64                          `json:"score"`
	ShortDescription string                         `json:"short_description"`
	TextMatches      []SearchResultTextMatches      `json:"text_matches"`
	UpdatedAt        time.Time                      `json:"updated_at"`
}
