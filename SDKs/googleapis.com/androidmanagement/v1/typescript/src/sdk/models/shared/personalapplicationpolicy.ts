import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PersonalApplicationPolicyInstallTypeEnum {
    InstallTypeUnspecified = "INSTALL_TYPE_UNSPECIFIED",
    Blocked = "BLOCKED",
    Available = "AVAILABLE"
}


// PersonalApplicationPolicy
/** 
 * Policies for apps in the personal profile of a company-owned device with a work profile.
**/
export class PersonalApplicationPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=installType" })
  installType?: PersonalApplicationPolicyInstallTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;
}
