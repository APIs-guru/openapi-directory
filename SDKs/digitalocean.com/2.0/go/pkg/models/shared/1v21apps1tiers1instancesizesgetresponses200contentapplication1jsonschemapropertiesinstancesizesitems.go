package shared

type Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum string

const (
	Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnumUnspecified Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum = "UNSPECIFIED"
	Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnumShared      Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum = "SHARED"
	Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnumDedicated   Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum = "DEDICATED"
)

type Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems struct {
	CPUType         *Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum `json:"cpu_type,omitempty"`
	Cpus            *string                                                                                                                                                     `json:"cpus,omitempty"`
	MemoryBytes     *string                                                                                                                                                     `json:"memory_bytes,omitempty"`
	Name            *string                                                                                                                                                     `json:"name,omitempty"`
	Slug            *string                                                                                                                                                     `json:"slug,omitempty"`
	TierDowngradeTo *string                                                                                                                                                     `json:"tier_downgrade_to,omitempty"`
	TierSlug        *string                                                                                                                                                     `json:"tier_slug,omitempty"`
	TierUpgradeTo   *string                                                                                                                                                     `json:"tier_upgrade_to,omitempty"`
	UsdPerMonth     *string                                                                                                                                                     `json:"usd_per_month,omitempty"`
	UsdPerSecond    *string                                                                                                                                                     `json:"usd_per_second,omitempty"`
}
