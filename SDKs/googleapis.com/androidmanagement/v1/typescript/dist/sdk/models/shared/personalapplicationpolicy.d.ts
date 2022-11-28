import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PersonalApplicationPolicyInstallTypeEnum {
    InstallTypeUnspecified = "INSTALL_TYPE_UNSPECIFIED",
    Blocked = "BLOCKED",
    Available = "AVAILABLE"
}
/**
 * Policies for apps in the personal profile of a company-owned device with a work profile.
**/
export declare class PersonalApplicationPolicy extends SpeakeasyBase {
    installType?: PersonalApplicationPolicyInstallTypeEnum;
    packageName?: string;
}
