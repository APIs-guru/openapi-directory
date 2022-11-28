import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceSpec } from "./devicespec";



// Variant
/** 
 * APK that is suitable for inclusion in a system image. The resource of SystemApksService.
**/
export class Variant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceSpec" })
  deviceSpec?: DeviceSpec;

  @SpeakeasyMetadata({ data: "json, name=variantId" })
  variantId?: number;
}


// VariantInput
/** 
 * APK that is suitable for inclusion in a system image. The resource of SystemApksService.
**/
export class VariantInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceSpec" })
  deviceSpec?: DeviceSpec;
}
