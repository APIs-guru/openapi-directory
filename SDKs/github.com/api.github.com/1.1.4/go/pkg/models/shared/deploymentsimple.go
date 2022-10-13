package shared

import (
	"time"
)

type DeploymentSimple struct {
	CreatedAt             time.Time              `json:"created_at"`
	Description           string                 `json:"description"`
	Environment           string                 `json:"environment"`
	ID                    int64                  `json:"id"`
	NodeID                string                 `json:"node_id"`
	OriginalEnvironment   *string                `json:"original_environment"`
	PerformedViaGithubApp map[string]interface{} `json:"performed_via_github_app"`
	ProductionEnvironment *bool                  `json:"production_environment"`
	RepositoryURL         string                 `json:"repository_url"`
	StatusesURL           string                 `json:"statuses_url"`
	Task                  string                 `json:"task"`
	TransientEnvironment  *bool                  `json:"transient_environment"`
	UpdatedAt             time.Time              `json:"updated_at"`
	URL                   string                 `json:"url"`
}
