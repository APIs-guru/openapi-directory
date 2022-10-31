package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetClusterlintResultsPathParams struct {
	ClusterID string `pathParam:"style=simple,explode=false,name=cluster_id"`
}

type GetClusterlintResultsQueryParams struct {
	RunID *string `queryParam:"style=form,explode=true,name=run_id"`
}

type GetClusterlintResultsRequest struct {
	PathParams  GetClusterlintResultsPathParams
	QueryParams GetClusterlintResultsQueryParams
}

type GetClusterlintResults200ApplicationJSONDiagnosticsObject struct {
	Kind      *string `json:"kind,omitempty"`
	Name      *string `json:"name,omitempty"`
	Namespace *string `json:"namespace,omitempty"`
}

type GetClusterlintResults200ApplicationJSONDiagnostics struct {
	CheckName *string                                                   `json:"check_name,omitempty"`
	Message   *string                                                   `json:"message,omitempty"`
	Object    *GetClusterlintResults200ApplicationJSONDiagnosticsObject `json:"object,omitempty"`
	Severity  *string                                                   `json:"severity,omitempty"`
}

type GetClusterlintResults200ApplicationJSON struct {
	CompletedAt *time.Time                                           `json:"completed_at,omitempty"`
	Diagnostics []GetClusterlintResults200ApplicationJSONDiagnostics `json:"diagnostics,omitempty"`
	RequestedAt *time.Time                                           `json:"requested_at,omitempty"`
	RunID       *string                                              `json:"run_id,omitempty"`
}

type GetClusterlintResults401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetClusterlintResultsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetClusterlintResults200ApplicationJSONObject             *GetClusterlintResults200ApplicationJSON
	GetClusterlintResults401ApplicationJSONObject             *GetClusterlintResults401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
