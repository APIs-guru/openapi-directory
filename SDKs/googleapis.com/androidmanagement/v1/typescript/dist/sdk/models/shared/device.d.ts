import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationReport } from "./applicationreport";
import { PasswordRequirements } from "./passwordrequirements";
import { CommonCriteriaModeInfo } from "./commoncriteriamodeinfo";
import { DeviceSettings } from "./devicesettings";
import { UserFacingMessage } from "./userfacingmessage";
import { Display } from "./display";
import { HardwareInfo } from "./hardwareinfo";
import { HardwareStatus } from "./hardwarestatus";
import { MemoryEvent } from "./memoryevent";
import { MemoryInfo } from "./memoryinfo";
import { NetworkInfo } from "./networkinfo";
import { NonComplianceDetail } from "./noncompliancedetail";
import { PowerManagementEvent } from "./powermanagementevent";
import { SecurityPosture } from "./securityposture";
import { SoftwareInfo } from "./softwareinfo";
import { User } from "./user";
export declare enum DeviceAppliedStateEnum {
    DeviceStateUnspecified = "DEVICE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Disabled = "DISABLED",
    Deleted = "DELETED",
    Provisioning = "PROVISIONING"
}
export declare enum DeviceManagementModeEnum {
    ManagementModeUnspecified = "MANAGEMENT_MODE_UNSPECIFIED",
    DeviceOwner = "DEVICE_OWNER",
    ProfileOwner = "PROFILE_OWNER"
}
export declare enum DeviceOwnershipEnum {
    OwnershipUnspecified = "OWNERSHIP_UNSPECIFIED",
    CompanyOwned = "COMPANY_OWNED",
    PersonallyOwned = "PERSONALLY_OWNED"
}
export declare enum DeviceStateEnum {
    DeviceStateUnspecified = "DEVICE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Disabled = "DISABLED",
    Deleted = "DELETED",
    Provisioning = "PROVISIONING"
}
/**
 * A device owned by an enterprise. Unless otherwise noted, all fields are read-only and can't be modified by enterprises.devices.patch.
**/
export declare class Device extends SpeakeasyBase {
    apiLevel?: number;
    applicationReports?: ApplicationReport[];
    appliedPasswordPolicies?: PasswordRequirements[];
    appliedPolicyName?: string;
    appliedPolicyVersion?: string;
    appliedState?: DeviceAppliedStateEnum;
    commonCriteriaModeInfo?: CommonCriteriaModeInfo;
    deviceSettings?: DeviceSettings;
    disabledReason?: UserFacingMessage;
    displays?: Display[];
    enrollmentTime?: string;
    enrollmentTokenData?: string;
    enrollmentTokenName?: string;
    hardwareInfo?: HardwareInfo;
    hardwareStatusSamples?: HardwareStatus[];
    lastPolicyComplianceReportTime?: string;
    lastPolicySyncTime?: string;
    lastStatusReportTime?: string;
    managementMode?: DeviceManagementModeEnum;
    memoryEvents?: MemoryEvent[];
    memoryInfo?: MemoryInfo;
    name?: string;
    networkInfo?: NetworkInfo;
    nonComplianceDetails?: NonComplianceDetail[];
    ownership?: DeviceOwnershipEnum;
    policyCompliant?: boolean;
    policyName?: string;
    powerManagementEvents?: PowerManagementEvent[];
    previousDeviceNames?: string[];
    securityPosture?: SecurityPosture;
    softwareInfo?: SoftwareInfo;
    state?: DeviceStateEnum;
    systemProperties?: Map<string, string>;
    user?: User;
    userName?: string;
}
