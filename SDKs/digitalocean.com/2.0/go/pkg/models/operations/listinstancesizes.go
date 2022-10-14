package operations

import (
	"openapi/pkg/models/shared"
)

type ListInstanceSizes200ApplicationJSONInstanceSizesCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum string

const (
	ListInstanceSizes200ApplicationJSONInstanceSizesCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnumUnspecified ListInstanceSizes200ApplicationJSONInstanceSizesCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum = "UNSPECIFIED"
	ListInstanceSizes200ApplicationJSONInstanceSizesCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnumShared      ListInstanceSizes200ApplicationJSONInstanceSizesCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum = "SHARED"
	ListInstanceSizes200ApplicationJSONInstanceSizesCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnumDedicated   ListInstanceSizes200ApplicationJSONInstanceSizesCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum = "DEDICATED"
)

type ListInstanceSizes200ApplicationJSONInstanceSizes struct {
	CPUType         *ListInstanceSizes200ApplicationJSONInstanceSizesCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum `json:"cpu_type,omitempty"`
	Cpus            *string                                                                                                      `json:"cpus,omitempty"`
	MemoryBytes     *string                                                                                                      `json:"memory_bytes,omitempty"`
	Name            *string                                                                                                      `json:"name,omitempty"`
	Slug            *string                                                                                                      `json:"slug,omitempty"`
	TierDowngradeTo *string                                                                                                      `json:"tier_downgrade_to,omitempty"`
	TierSlug        *string                                                                                                      `json:"tier_slug,omitempty"`
	TierUpgradeTo   *string                                                                                                      `json:"tier_upgrade_to,omitempty"`
	UsdPerMonth     *string                                                                                                      `json:"usd_per_month,omitempty"`
	UsdPerSecond    *string                                                                                                      `json:"usd_per_second,omitempty"`
}

type ListInstanceSizes200ApplicationJSON struct {
	DiscountPercent *float32                                           `json:"discount_percent,omitempty"`
	InstanceSizes   []ListInstanceSizes200ApplicationJSONInstanceSizes `json:"instance_sizes,omitempty"`
}

type ListInstanceSizes401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListInstanceSizesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListInstanceSizes200ApplicationJSONObject                 *ListInstanceSizes200ApplicationJSON
	ListInstanceSizes401ApplicationJSONObject                 *ListInstanceSizes401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
