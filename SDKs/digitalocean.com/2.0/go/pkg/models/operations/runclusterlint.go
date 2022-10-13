package operations

import (
	"openapi/pkg/models/shared"
)

type RunClusterlintPathParams struct {
	ClusterID string `pathParam:"style=simple,explode=false,name=cluster_id"`
}

type RunClusterlintRequestBody struct {
	ExcludeChecks []string `json:"exclude_checks"`
	ExcludeGroups []string `json:"exclude_groups"`
	IncludeChecks []string `json:"include_checks"`
	IncludeGroups []string `json:"include_groups"`
}

type RunClusterlintRequest struct {
	PathParams RunClusterlintPathParams
	Request    *RunClusterlintRequestBody `request:"mediaType=application/json"`
}

type RunClusterlint401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type RunClusterlintResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	RunClusterlint202ApplicationJSONAny                       *interface{}
	RunClusterlint401ApplicationJSONObject                    *RunClusterlint401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
