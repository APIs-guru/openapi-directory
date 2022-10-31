package shared

import (
"time")

type DeploymentSimple struct {
    CreatedAt time.Time `json:"created_at"`
    Description string `json:"description"`
    Environment string `json:"environment"`
    ID int64 `json:"id"`
    NodeID string `json:"node_id"`
    OriginalEnvironment *string `json:"original_environment,omitempty"`
    PerformedViaGithubApp map[string]interface{} `json:"performed_via_github_app,omitempty"`
    ProductionEnvironment *bool `json:"production_environment,omitempty"`
    RepositoryURL string `json:"repository_url"`
    StatusesURL string `json:"statuses_url"`
    Task string `json:"task"`
    TransientEnvironment *bool `json:"transient_environment,omitempty"`
    UpdatedAt time.Time `json:"updated_at"`
    URL string `json:"url"`
    
}

