import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstancePlatformEnum } from "./instanceplatformenum";
import { BlueprintTypeEnum } from "./blueprinttypeenum";


// Blueprint
/** 
 * Describes a blueprint (a virtual private server image).
**/
export class Blueprint extends SpeakeasyBase {
  @Metadata({ data: "json, name=blueprintId" })
  blueprintId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @Metadata({ data: "json, name=licenseUrl" })
  licenseUrl?: string;

  @Metadata({ data: "json, name=minPower" })
  minPower?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: InstancePlatformEnum;

  @Metadata({ data: "json, name=productUrl" })
  productUrl?: string;

  @Metadata({ data: "json, name=type" })
  type?: BlueprintTypeEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;

  @Metadata({ data: "json, name=versionCode" })
  versionCode?: string;
}
