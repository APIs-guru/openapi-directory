package operations

import (
	"openapi/pkg/models/shared"
)

type GetAvailableUpgradesPathParams struct {
	ClusterID string `pathParam:"style=simple,explode=false,name=cluster_id"`
}

type GetAvailableUpgradesRequest struct {
	PathParams GetAvailableUpgradesPathParams
}

type GetAvailableUpgrades200ApplicationJSONAvailableUpgradeVersions struct {
	KubernetesVersion *string `json:"kubernetes_version"`
	Slug              *string `json:"slug"`
}

type GetAvailableUpgrades200ApplicationJSON struct {
	AvailableUpgradeVersions []GetAvailableUpgrades200ApplicationJSONAvailableUpgradeVersions `json:"available_upgrade_versions"`
}

type GetAvailableUpgrades401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetAvailableUpgradesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetAvailableUpgrades200ApplicationJSONObject              *GetAvailableUpgrades200ApplicationJSON
	GetAvailableUpgrades401ApplicationJSONObject              *GetAvailableUpgrades401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
