import { SpeakeasyBase } from "../../../internal/utils";
import { SystemUpdateInfo } from "./systemupdateinfo";
/**
 * Information about device software.
**/
export declare class SoftwareInfo extends SpeakeasyBase {
    androidBuildNumber?: string;
    androidBuildTime?: string;
    androidDevicePolicyVersionCode?: number;
    androidDevicePolicyVersionName?: string;
    androidVersion?: string;
    bootloaderVersion?: string;
    deviceBuildSignature?: string;
    deviceKernelVersion?: string;
    primaryLanguageCode?: string;
    securityPatchLevel?: string;
    systemUpdateInfo?: SystemUpdateInfo;
}
