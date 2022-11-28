import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


export enum DeviceAppliedStateEnum {
    DeviceStateUnspecified = "DEVICE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Disabled = "DISABLED",
    Deleted = "DELETED",
    Provisioning = "PROVISIONING"
}

export enum DeviceManagementModeEnum {
    ManagementModeUnspecified = "MANAGEMENT_MODE_UNSPECIFIED",
    DeviceOwner = "DEVICE_OWNER",
    ProfileOwner = "PROFILE_OWNER"
}

export enum DeviceOwnershipEnum {
    OwnershipUnspecified = "OWNERSHIP_UNSPECIFIED",
    CompanyOwned = "COMPANY_OWNED",
    PersonallyOwned = "PERSONALLY_OWNED"
}

export enum DeviceStateEnum {
    DeviceStateUnspecified = "DEVICE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Disabled = "DISABLED",
    Deleted = "DELETED",
    Provisioning = "PROVISIONING"
}


// Device
/** 
 * A device owned by an enterprise. Unless otherwise noted, all fields are read-only and can't be modified by enterprises.devices.patch.
**/
export class Device extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiLevel" })
  apiLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=applicationReports", elemType: ApplicationReport })
  applicationReports?: ApplicationReport[];

  @SpeakeasyMetadata({ data: "json, name=appliedPasswordPolicies", elemType: PasswordRequirements })
  appliedPasswordPolicies?: PasswordRequirements[];

  @SpeakeasyMetadata({ data: "json, name=appliedPolicyName" })
  appliedPolicyName?: string;

  @SpeakeasyMetadata({ data: "json, name=appliedPolicyVersion" })
  appliedPolicyVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=appliedState" })
  appliedState?: DeviceAppliedStateEnum;

  @SpeakeasyMetadata({ data: "json, name=commonCriteriaModeInfo" })
  commonCriteriaModeInfo?: CommonCriteriaModeInfo;

  @SpeakeasyMetadata({ data: "json, name=deviceSettings" })
  deviceSettings?: DeviceSettings;

  @SpeakeasyMetadata({ data: "json, name=disabledReason" })
  disabledReason?: UserFacingMessage;

  @SpeakeasyMetadata({ data: "json, name=displays", elemType: Display })
  displays?: Display[];

  @SpeakeasyMetadata({ data: "json, name=enrollmentTime" })
  enrollmentTime?: string;

  @SpeakeasyMetadata({ data: "json, name=enrollmentTokenData" })
  enrollmentTokenData?: string;

  @SpeakeasyMetadata({ data: "json, name=enrollmentTokenName" })
  enrollmentTokenName?: string;

  @SpeakeasyMetadata({ data: "json, name=hardwareInfo" })
  hardwareInfo?: HardwareInfo;

  @SpeakeasyMetadata({ data: "json, name=hardwareStatusSamples", elemType: HardwareStatus })
  hardwareStatusSamples?: HardwareStatus[];

  @SpeakeasyMetadata({ data: "json, name=lastPolicyComplianceReportTime" })
  lastPolicyComplianceReportTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastPolicySyncTime" })
  lastPolicySyncTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastStatusReportTime" })
  lastStatusReportTime?: string;

  @SpeakeasyMetadata({ data: "json, name=managementMode" })
  managementMode?: DeviceManagementModeEnum;

  @SpeakeasyMetadata({ data: "json, name=memoryEvents", elemType: MemoryEvent })
  memoryEvents?: MemoryEvent[];

  @SpeakeasyMetadata({ data: "json, name=memoryInfo" })
  memoryInfo?: MemoryInfo;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkInfo" })
  networkInfo?: NetworkInfo;

  @SpeakeasyMetadata({ data: "json, name=nonComplianceDetails", elemType: NonComplianceDetail })
  nonComplianceDetails?: NonComplianceDetail[];

  @SpeakeasyMetadata({ data: "json, name=ownership" })
  ownership?: DeviceOwnershipEnum;

  @SpeakeasyMetadata({ data: "json, name=policyCompliant" })
  policyCompliant?: boolean;

  @SpeakeasyMetadata({ data: "json, name=policyName" })
  policyName?: string;

  @SpeakeasyMetadata({ data: "json, name=powerManagementEvents", elemType: PowerManagementEvent })
  powerManagementEvents?: PowerManagementEvent[];

  @SpeakeasyMetadata({ data: "json, name=previousDeviceNames" })
  previousDeviceNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=securityPosture" })
  securityPosture?: SecurityPosture;

  @SpeakeasyMetadata({ data: "json, name=softwareInfo" })
  softwareInfo?: SoftwareInfo;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: DeviceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=systemProperties" })
  systemProperties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
