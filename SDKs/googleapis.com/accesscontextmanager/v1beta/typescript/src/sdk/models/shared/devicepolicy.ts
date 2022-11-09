import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OsConstraint } from "./osconstraint";

export enum DevicePolicyAllowedDeviceManagementLevelsEnum {
    ManagementUnspecified = "MANAGEMENT_UNSPECIFIED"
,    None = "NONE"
,    Basic = "BASIC"
,    Complete = "COMPLETE"
}

export enum DevicePolicyAllowedEncryptionStatusesEnum {
    EncryptionUnspecified = "ENCRYPTION_UNSPECIFIED"
,    EncryptionUnsupported = "ENCRYPTION_UNSUPPORTED"
,    Unencrypted = "UNENCRYPTED"
,    Encrypted = "ENCRYPTED"
}


// DevicePolicy
/** 
 * `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops.
**/
export class DevicePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedDeviceManagementLevels" })
  allowedDeviceManagementLevels?: DevicePolicyAllowedDeviceManagementLevelsEnum[];

  @Metadata({ data: "json, name=allowedEncryptionStatuses" })
  allowedEncryptionStatuses?: DevicePolicyAllowedEncryptionStatusesEnum[];

  @Metadata({ data: "json, name=osConstraints", elemType: shared.OsConstraint })
  osConstraints?: OsConstraint[];

  @Metadata({ data: "json, name=requireAdminApproval" })
  requireAdminApproval?: boolean;

  @Metadata({ data: "json, name=requireCorpOwned" })
  requireCorpOwned?: boolean;

  @Metadata({ data: "json, name=requireScreenlock" })
  requireScreenlock?: boolean;
}
