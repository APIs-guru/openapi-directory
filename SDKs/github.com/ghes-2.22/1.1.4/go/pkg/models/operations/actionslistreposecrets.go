package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsListRepoSecretsPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ActionsListRepoSecretsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ActionsListRepoSecretsRequest struct {
	PathParams  ActionsListRepoSecretsPathParams
	QueryParams ActionsListRepoSecretsQueryParams
}

type ActionsListRepoSecrets200ApplicationJSON struct {
	Secrets    []shared.ActionsSecret `json:"secrets"`
	TotalCount int64                  `json:"total_count"`
}

type ActionsListRepoSecretsResponse struct {
	ContentType                                    string
	Headers                                        map[string][]string
	StatusCode                                     int64
	ActionsListRepoSecrets200ApplicationJSONObject *ActionsListRepoSecrets200ApplicationJSON
}
