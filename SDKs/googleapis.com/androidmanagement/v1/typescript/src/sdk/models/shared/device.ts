import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
    DeviceStateUnspecified = "DEVICE_STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Disabled = "DISABLED"
,    Deleted = "DELETED"
,    Provisioning = "PROVISIONING"
}

export enum DeviceManagementModeEnum {
    ManagementModeUnspecified = "MANAGEMENT_MODE_UNSPECIFIED"
,    DeviceOwner = "DEVICE_OWNER"
,    ProfileOwner = "PROFILE_OWNER"
}

export enum DeviceOwnershipEnum {
    OwnershipUnspecified = "OWNERSHIP_UNSPECIFIED"
,    CompanyOwned = "COMPANY_OWNED"
,    PersonallyOwned = "PERSONALLY_OWNED"
}

export enum DeviceStateEnum {
    DeviceStateUnspecified = "DEVICE_STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Disabled = "DISABLED"
,    Deleted = "DELETED"
,    Provisioning = "PROVISIONING"
}


// Device
/** 
 * A device owned by an enterprise. Unless otherwise noted, all fields are read-only and can't be modified by enterprises.devices.patch.
**/
export class Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiLevel" })
  apiLevel?: number;

  @Metadata({ data: "json, name=applicationReports", elemType: shared.ApplicationReport })
  applicationReports?: ApplicationReport[];

  @Metadata({ data: "json, name=appliedPasswordPolicies", elemType: shared.PasswordRequirements })
  appliedPasswordPolicies?: PasswordRequirements[];

  @Metadata({ data: "json, name=appliedPolicyName" })
  appliedPolicyName?: string;

  @Metadata({ data: "json, name=appliedPolicyVersion" })
  appliedPolicyVersion?: string;

  @Metadata({ data: "json, name=appliedState" })
  appliedState?: DeviceAppliedStateEnum;

  @Metadata({ data: "json, name=commonCriteriaModeInfo" })
  commonCriteriaModeInfo?: CommonCriteriaModeInfo;

  @Metadata({ data: "json, name=deviceSettings" })
  deviceSettings?: DeviceSettings;

  @Metadata({ data: "json, name=disabledReason" })
  disabledReason?: UserFacingMessage;

  @Metadata({ data: "json, name=displays", elemType: shared.Display })
  displays?: Display[];

  @Metadata({ data: "json, name=enrollmentTime" })
  enrollmentTime?: string;

  @Metadata({ data: "json, name=enrollmentTokenData" })
  enrollmentTokenData?: string;

  @Metadata({ data: "json, name=enrollmentTokenName" })
  enrollmentTokenName?: string;

  @Metadata({ data: "json, name=hardwareInfo" })
  hardwareInfo?: HardwareInfo;

  @Metadata({ data: "json, name=hardwareStatusSamples", elemType: shared.HardwareStatus })
  hardwareStatusSamples?: HardwareStatus[];

  @Metadata({ data: "json, name=lastPolicyComplianceReportTime" })
  lastPolicyComplianceReportTime?: string;

  @Metadata({ data: "json, name=lastPolicySyncTime" })
  lastPolicySyncTime?: string;

  @Metadata({ data: "json, name=lastStatusReportTime" })
  lastStatusReportTime?: string;

  @Metadata({ data: "json, name=managementMode" })
  managementMode?: DeviceManagementModeEnum;

  @Metadata({ data: "json, name=memoryEvents", elemType: shared.MemoryEvent })
  memoryEvents?: MemoryEvent[];

  @Metadata({ data: "json, name=memoryInfo" })
  memoryInfo?: MemoryInfo;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networkInfo" })
  networkInfo?: NetworkInfo;

  @Metadata({ data: "json, name=nonComplianceDetails", elemType: shared.NonComplianceDetail })
  nonComplianceDetails?: NonComplianceDetail[];

  @Metadata({ data: "json, name=ownership" })
  ownership?: DeviceOwnershipEnum;

  @Metadata({ data: "json, name=policyCompliant" })
  policyCompliant?: boolean;

  @Metadata({ data: "json, name=policyName" })
  policyName?: string;

  @Metadata({ data: "json, name=powerManagementEvents", elemType: shared.PowerManagementEvent })
  powerManagementEvents?: PowerManagementEvent[];

  @Metadata({ data: "json, name=previousDeviceNames" })
  previousDeviceNames?: string[];

  @Metadata({ data: "json, name=securityPosture" })
  securityPosture?: SecurityPosture;

  @Metadata({ data: "json, name=softwareInfo" })
  softwareInfo?: SoftwareInfo;

  @Metadata({ data: "json, name=state" })
  state?: DeviceStateEnum;

  @Metadata({ data: "json, name=systemProperties" })
  systemProperties?: Map<string, string>;

  @Metadata({ data: "json, name=user" })
  user?: User;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}
