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
	CPUType         *ListInstanceSizes200ApplicationJSONInstanceSizesCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum `json:"cpu_type"`
	Cpus            *string                                                                                                      `json:"cpus"`
	MemoryBytes     *string                                                                                                      `json:"memory_bytes"`
	Name            *string                                                                                                      `json:"name"`
	Slug            *string                                                                                                      `json:"slug"`
	TierDowngradeTo *string                                                                                                      `json:"tier_downgrade_to"`
	TierSlug        *string                                                                                                      `json:"tier_slug"`
	TierUpgradeTo   *string                                                                                                      `json:"tier_upgrade_to"`
	UsdPerMonth     *string                                                                                                      `json:"usd_per_month"`
	UsdPerSecond    *string                                                                                                      `json:"usd_per_second"`
}

type ListInstanceSizes200ApplicationJSON struct {
	DiscountPercent *float32                                           `json:"discount_percent"`
	InstanceSizes   []ListInstanceSizes200ApplicationJSONInstanceSizes `json:"instance_sizes"`
}

type ListInstanceSizes401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListInstanceSizesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListInstanceSizes200ApplicationJSONObject                 *ListInstanceSizes200ApplicationJSON
	ListInstanceSizes401ApplicationJSONObject                 *ListInstanceSizes401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
