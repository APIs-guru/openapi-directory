import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The device spec used to generate a system APK.
**/
export declare class DeviceSpec extends SpeakeasyBase {
    screenDensity?: number;
    supportedAbis?: string[];
    supportedLocales?: string[];
}
