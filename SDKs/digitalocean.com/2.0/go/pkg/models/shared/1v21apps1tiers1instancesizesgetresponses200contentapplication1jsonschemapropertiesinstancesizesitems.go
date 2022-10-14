package shared

type Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum string

const (
	Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnumUnspecified Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum = "UNSPECIFIED"
	Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnumShared      Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum = "SHARED"
	Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnumDedicated   Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum = "DEDICATED"
)

type Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems struct {
	CPUType         *Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum `json:"cpu_type,omitempty"`
	Cpus            *string                                                                                                                                                            `json:"cpus,omitempty"`
	MemoryBytes     *string                                                                                                                                                            `json:"memory_bytes,omitempty"`
	Name            *string                                                                                                                                                            `json:"name,omitempty"`
	Slug            *string                                                                                                                                                            `json:"slug,omitempty"`
	TierDowngradeTo *string                                                                                                                                                            `json:"tier_downgrade_to,omitempty"`
	TierSlug        *string                                                                                                                                                            `json:"tier_slug,omitempty"`
	TierUpgradeTo   *string                                                                                                                                                            `json:"tier_upgrade_to,omitempty"`
	UsdPerMonth     *string                                                                                                                                                            `json:"usd_per_month,omitempty"`
	UsdPerSecond    *string                                                                                                                                                            `json:"usd_per_second,omitempty"`
}
