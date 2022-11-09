import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsSharedSharedVCpuCoresDedicatedDedicatedVCpuCoresEnum {
    Unspecified = "UNSPECIFIED"
,    Shared = "SHARED"
,    Dedicated = "DEDICATED"
}


export class Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpu_type" })
  cpuType?: Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsSharedSharedVCpuCoresDedicatedDedicatedVCpuCoresEnum;

  @Metadata({ data: "json, name=cpus" })
  cpus?: string;

  @Metadata({ data: "json, name=memory_bytes" })
  memoryBytes?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=tier_downgrade_to" })
  tierDowngradeTo?: string;

  @Metadata({ data: "json, name=tier_slug" })
  tierSlug?: string;

  @Metadata({ data: "json, name=tier_upgrade_to" })
  tierUpgradeTo?: string;

  @Metadata({ data: "json, name=usd_per_month" })
  usdPerMonth?: string;

  @Metadata({ data: "json, name=usd_per_second" })
  usdPerSecond?: string;
}
