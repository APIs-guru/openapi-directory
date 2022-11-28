import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstancePlatformEnum } from "./instanceplatformenum";
import { BlueprintTypeEnum } from "./blueprinttypeenum";



// Blueprint
/** 
 * Describes a blueprint (a virtual private server image).
**/
export class Blueprint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blueprintId" })
  blueprintId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=licenseUrl" })
  licenseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=minPower" })
  minPower?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: InstancePlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=productUrl" })
  productUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: BlueprintTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=versionCode" })
  versionCode?: string;
}
