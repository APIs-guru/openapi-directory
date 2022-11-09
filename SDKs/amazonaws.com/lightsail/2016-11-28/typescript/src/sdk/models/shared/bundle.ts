import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstancePlatformEnum } from "./instanceplatformenum";


// Bundle
/** 
 * Describes a bundle, which is a set of specs describing your virtual private server (or <i>instance</i>).
**/
export class Bundle extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=cpuCount" })
  cpuCount?: number;

  @Metadata({ data: "json, name=diskSizeInGb" })
  diskSizeInGb?: number;

  @Metadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=power" })
  power?: number;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=ramSizeInGb" })
  ramSizeInGb?: number;

  @Metadata({ data: "json, name=supportedPlatforms" })
  supportedPlatforms?: InstancePlatformEnum[];

  @Metadata({ data: "json, name=transferPerMonthInGb" })
  transferPerMonthInGb?: number;
}
