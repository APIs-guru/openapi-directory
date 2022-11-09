import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegionNameEnum } from "./regionnameenum";


// ResourceLocation
/** 
 * Describes the resource location.
**/
export class ResourceLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=availabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=regionName" })
  regionName?: RegionNameEnum;
}
