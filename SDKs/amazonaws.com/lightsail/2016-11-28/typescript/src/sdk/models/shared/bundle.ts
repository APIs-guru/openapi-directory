import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstancePlatformEnum } from "./instanceplatformenum";



// Bundle
/** 
 * Describes a bundle, which is a set of specs describing your virtual private server (or <i>instance</i>).
**/
export class Bundle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=cpuCount" })
  cpuCount?: number;

  @SpeakeasyMetadata({ data: "json, name=diskSizeInGb" })
  diskSizeInGb?: number;

  @SpeakeasyMetadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=power" })
  power?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=ramSizeInGb" })
  ramSizeInGb?: number;

  @SpeakeasyMetadata({ data: "json, name=supportedPlatforms" })
  supportedPlatforms?: InstancePlatformEnum[];

  @SpeakeasyMetadata({ data: "json, name=transferPerMonthInGb" })
  transferPerMonthInGb?: number;
}
