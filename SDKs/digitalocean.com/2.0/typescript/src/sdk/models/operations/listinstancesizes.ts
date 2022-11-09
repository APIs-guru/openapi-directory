import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListInstanceSizes200ApplicationJsonInstanceSizesSharedSharedVCpuCoresDedicatedDedicatedVCpuCoresEnum {
    Unspecified = "UNSPECIFIED"
,    Shared = "SHARED"
,    Dedicated = "DEDICATED"
}


export class ListInstanceSizes200ApplicationJsonInstanceSizes extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpu_type" })
  cpuType?: ListInstanceSizes200ApplicationJsonInstanceSizesSharedSharedVCpuCoresDedicatedDedicatedVCpuCoresEnum;

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


export class ListInstanceSizes200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=discount_percent" })
  discountPercent?: number;

  @Metadata({ data: "json, name=instance_sizes", elemType: operations.ListInstanceSizes200ApplicationJsonInstanceSizes })
  instanceSizes?: ListInstanceSizes200ApplicationJsonInstanceSizes[];
}


export class ListInstanceSizes401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListInstanceSizesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listInstanceSizes200ApplicationJsonObject?: ListInstanceSizes200ApplicationJson;

  @Metadata()
  listInstanceSizes401ApplicationJsonObject?: ListInstanceSizes401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
