import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SystemUpdateInfo } from "./systemupdateinfo";


// SoftwareInfo
/** 
 * Information about device software.
**/
export class SoftwareInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidBuildNumber" })
  androidBuildNumber?: string;

  @Metadata({ data: "json, name=androidBuildTime" })
  androidBuildTime?: string;

  @Metadata({ data: "json, name=androidDevicePolicyVersionCode" })
  androidDevicePolicyVersionCode?: number;

  @Metadata({ data: "json, name=androidDevicePolicyVersionName" })
  androidDevicePolicyVersionName?: string;

  @Metadata({ data: "json, name=androidVersion" })
  androidVersion?: string;

  @Metadata({ data: "json, name=bootloaderVersion" })
  bootloaderVersion?: string;

  @Metadata({ data: "json, name=deviceBuildSignature" })
  deviceBuildSignature?: string;

  @Metadata({ data: "json, name=deviceKernelVersion" })
  deviceKernelVersion?: string;

  @Metadata({ data: "json, name=primaryLanguageCode" })
  primaryLanguageCode?: string;

  @Metadata({ data: "json, name=securityPatchLevel" })
  securityPatchLevel?: string;

  @Metadata({ data: "json, name=systemUpdateInfo" })
  systemUpdateInfo?: SystemUpdateInfo;
}
