package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsListEnvironmentSecretsPathParams struct {
	EnvironmentName string `pathParam:"style=simple,explode=false,name=environment_name"`
	RepositoryID    int64  `pathParam:"style=simple,explode=false,name=repository_id"`
}

type ActionsListEnvironmentSecretsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ActionsListEnvironmentSecretsRequest struct {
	PathParams  ActionsListEnvironmentSecretsPathParams
	QueryParams ActionsListEnvironmentSecretsQueryParams
}

type ActionsListEnvironmentSecrets200ApplicationJSON struct {
	Secrets    []shared.ActionsSecret `json:"secrets"`
	TotalCount int64                  `json:"total_count"`
}

type ActionsListEnvironmentSecretsResponse struct {
	ContentType                                           string
	Headers                                               map[string][]string
	StatusCode                                            int64
	ActionsListEnvironmentSecrets200ApplicationJSONObject *ActionsListEnvironmentSecrets200ApplicationJSON
}
