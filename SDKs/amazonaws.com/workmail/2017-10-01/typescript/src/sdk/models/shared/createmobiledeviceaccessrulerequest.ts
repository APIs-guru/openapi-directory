import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MobileDeviceAccessRuleEffectEnum } from "./mobiledeviceaccessruleeffectenum";



export class CreateMobileDeviceAccessRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken?: string;

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
  effect: MobileDeviceAccessRuleEffectEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=NotDeviceModels" })
  notDeviceModels?: string[];

  @SpeakeasyMetadata({ data: "json, name=NotDeviceOperatingSystems" })
  notDeviceOperatingSystems?: string[];

  @SpeakeasyMetadata({ data: "json, name=NotDeviceTypes" })
  notDeviceTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=NotDeviceUserAgents" })
  notDeviceUserAgents?: string[];

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
