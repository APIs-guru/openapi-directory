package shared

type Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum string

const (
	Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnumUnspecified Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum = "UNSPECIFIED"
	Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnumShared      Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum = "SHARED"
	Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnumDedicated   Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum = "DEDICATED"
)

type Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems struct {
	CPUType         *Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsCPUTypeSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum `json:"cpu_type"`
	Cpus            *string                                                                                                                                                            `json:"cpus"`
	MemoryBytes     *string                                                                                                                                                            `json:"memory_bytes"`
	Name            *string                                                                                                                                                            `json:"name"`
	Slug            *string                                                                                                                                                            `json:"slug"`
	TierDowngradeTo *string                                                                                                                                                            `json:"tier_downgrade_to"`
	TierSlug        *string                                                                                                                                                            `json:"tier_slug"`
	TierUpgradeTo   *string                                                                                                                                                            `json:"tier_upgrade_to"`
	UsdPerMonth     *string                                                                                                                                                            `json:"usd_per_month"`
	UsdPerSecond    *string                                                                                                                                                            `json:"usd_per_second"`
}
