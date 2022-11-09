import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceSpec } from "./devicespec";


// Variant
/** 
 * APK that is suitable for inclusion in a system image. The resource of SystemApksService.
**/
export class Variant extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceSpec" })
  deviceSpec?: DeviceSpec;

  @Metadata({ data: "json, name=variantId" })
  variantId?: number;
}
