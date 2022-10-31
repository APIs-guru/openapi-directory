package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDatabaseFirewallPathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
}

type UpdateDatabaseFirewallRequestBody struct {
	Rules []shared.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItems `json:"rules,omitempty"`
}

type UpdateDatabaseFirewallRequest struct {
	PathParams UpdateDatabaseFirewallPathParams
	Request    UpdateDatabaseFirewallRequestBody `request:"mediaType=application/json"`
}

type UpdateDatabaseFirewall401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type UpdateDatabaseFirewallResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateDatabaseFirewall401ApplicationJSONObject            *UpdateDatabaseFirewall401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
