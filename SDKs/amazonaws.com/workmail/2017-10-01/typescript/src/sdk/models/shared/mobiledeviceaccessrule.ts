import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MobileDeviceAccessRuleEffectEnum } from "./mobiledeviceaccessruleeffectenum";


// MobileDeviceAccessRule
/** 
 * A rule that controls access to mobile devices for an Amazon WorkMail group.
**/
export class MobileDeviceAccessRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=DateCreated" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=DateModified" })
  dateModified?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DeviceModels" })
  deviceModels?: string[];

  @Metadata({ data: "json, name=DeviceOperatingSystems" })
  deviceOperatingSystems?: string[];

  @Metadata({ data: "json, name=DeviceTypes" })
  deviceTypes?: string[];

  @Metadata({ data: "json, name=DeviceUserAgents" })
  deviceUserAgents?: string[];

  @Metadata({ data: "json, name=Effect" })
  effect?: MobileDeviceAccessRuleEffectEnum;

  @Metadata({ data: "json, name=MobileDeviceAccessRuleId" })
  mobileDeviceAccessRuleId?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NotDeviceModels" })
  notDeviceModels?: string[];

  @Metadata({ data: "json, name=NotDeviceOperatingSystems" })
  notDeviceOperatingSystems?: string[];

  @Metadata({ data: "json, name=NotDeviceTypes" })
  notDeviceTypes?: string[];

  @Metadata({ data: "json, name=NotDeviceUserAgents" })
  notDeviceUserAgents?: string[];
}
