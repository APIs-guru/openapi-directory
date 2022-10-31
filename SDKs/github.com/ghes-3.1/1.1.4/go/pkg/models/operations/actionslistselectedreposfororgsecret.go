package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsListSelectedReposForOrgSecretPathParams struct {
	Org        string `pathParam:"style=simple,explode=false,name=org"`
	SecretName string `pathParam:"style=simple,explode=false,name=secret_name"`
}

type ActionsListSelectedReposForOrgSecretQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ActionsListSelectedReposForOrgSecretRequest struct {
	PathParams  ActionsListSelectedReposForOrgSecretPathParams
	QueryParams ActionsListSelectedReposForOrgSecretQueryParams
}

type ActionsListSelectedReposForOrgSecret200ApplicationJSON struct {
	Repositories []shared.MinimalRepository `json:"repositories"`
	TotalCount   int64                      `json:"total_count"`
}

type ActionsListSelectedReposForOrgSecretResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	ActionsListSelectedReposForOrgSecret200ApplicationJSONObject *ActionsListSelectedReposForOrgSecret200ApplicationJSON
}
