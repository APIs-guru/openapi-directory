import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemUpdateInfo } from "./systemupdateinfo";



// SoftwareInfo
/** 
 * Information about device software.
**/
export class SoftwareInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidBuildNumber" })
  androidBuildNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=androidBuildTime" })
  androidBuildTime?: string;

  @SpeakeasyMetadata({ data: "json, name=androidDevicePolicyVersionCode" })
  androidDevicePolicyVersionCode?: number;

  @SpeakeasyMetadata({ data: "json, name=androidDevicePolicyVersionName" })
  androidDevicePolicyVersionName?: string;

  @SpeakeasyMetadata({ data: "json, name=androidVersion" })
  androidVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=bootloaderVersion" })
  bootloaderVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceBuildSignature" })
  deviceBuildSignature?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceKernelVersion" })
  deviceKernelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryLanguageCode" })
  primaryLanguageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=securityPatchLevel" })
  securityPatchLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=systemUpdateInfo" })
  systemUpdateInfo?: SystemUpdateInfo;
}
