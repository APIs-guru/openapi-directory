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
	Kind      *string `json:"kind"`
	Name      *string `json:"name"`
	Namespace *string `json:"namespace"`
}

type GetClusterlintResults200ApplicationJSONDiagnostics struct {
	CheckName *string                                                   `json:"check_name"`
	Message   *string                                                   `json:"message"`
	Object    *GetClusterlintResults200ApplicationJSONDiagnosticsObject `json:"object"`
	Severity  *string                                                   `json:"severity"`
}

type GetClusterlintResults200ApplicationJSON struct {
	CompletedAt *time.Time                                           `json:"completed_at"`
	Diagnostics []GetClusterlintResults200ApplicationJSONDiagnostics `json:"diagnostics"`
	RequestedAt *time.Time                                           `json:"requested_at"`
	RunID       *string                                              `json:"run_id"`
}

type GetClusterlintResults401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetClusterlintResultsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetClusterlintResults200ApplicationJSONObject             *GetClusterlintResults200ApplicationJSON
	GetClusterlintResults401ApplicationJSONObject             *GetClusterlintResults401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
