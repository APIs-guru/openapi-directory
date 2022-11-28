import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionNameEnum } from "./regionnameenum";



// ResourceLocation
/** 
 * Describes the resource location.
**/
export class ResourceLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=regionName" })
  regionName?: RegionNameEnum;
}
