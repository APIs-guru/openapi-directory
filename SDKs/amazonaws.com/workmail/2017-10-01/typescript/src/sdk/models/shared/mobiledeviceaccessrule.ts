import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MobileDeviceAccessRuleEffectEnum } from "./mobiledeviceaccessruleeffectenum";



// MobileDeviceAccessRule
/** 
 * A rule that controls access to mobile devices for an Amazon WorkMail group.
**/
export class MobileDeviceAccessRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DateCreated" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=DateModified" })
  dateModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceModels" })
  deviceModels?: string[];

  @SpeakeasyMetadata({ data: "json, name=DeviceOperatingSystems" })
  deviceOperatingSystems?: string[];

  @SpeakeasyMetadata({ data: "json, name=DeviceTypes" })
  deviceTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=DeviceUserAgents" })
  deviceUserAgents?: string[];

  @SpeakeasyMetadata({ data: "json, name=Effect" })
  effect?: MobileDeviceAccessRuleEffectEnum;

  @SpeakeasyMetadata({ data: "json, name=MobileDeviceAccessRuleId" })
  mobileDeviceAccessRuleId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NotDeviceModels" })
  notDeviceModels?: string[];

  @SpeakeasyMetadata({ data: "json, name=NotDeviceOperatingSystems" })
  notDeviceOperatingSystems?: string[];

  @SpeakeasyMetadata({ data: "json, name=NotDeviceTypes" })
  notDeviceTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=NotDeviceUserAgents" })
  notDeviceUserAgents?: string[];
}
