import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceSpec } from "./devicespec";
/**
 * APK that is suitable for inclusion in a system image. The resource of SystemApksService.
**/
export declare class Variant extends SpeakeasyBase {
    deviceSpec?: DeviceSpec;
    variantId?: number;
}
/**
 * APK that is suitable for inclusion in a system image. The resource of SystemApksService.
**/
export declare class VariantInput extends SpeakeasyBase {
    deviceSpec?: DeviceSpec;
}
