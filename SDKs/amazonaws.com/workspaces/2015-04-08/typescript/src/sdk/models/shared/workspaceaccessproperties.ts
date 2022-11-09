import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessPropertyValueEnum } from "./accesspropertyvalueenum";
import { AccessPropertyValueEnum } from "./accesspropertyvalueenum";
import { AccessPropertyValueEnum } from "./accesspropertyvalueenum";
import { AccessPropertyValueEnum } from "./accesspropertyvalueenum";
import { AccessPropertyValueEnum } from "./accesspropertyvalueenum";
import { AccessPropertyValueEnum } from "./accesspropertyvalueenum";
import { AccessPropertyValueEnum } from "./accesspropertyvalueenum";
import { AccessPropertyValueEnum } from "./accesspropertyvalueenum";


// WorkspaceAccessProperties
/** 
 * The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>.
**/
export class WorkspaceAccessProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceTypeAndroid" })
  deviceTypeAndroid?: AccessPropertyValueEnum;

  @Metadata({ data: "json, name=DeviceTypeChromeOs" })
  deviceTypeChromeOs?: AccessPropertyValueEnum;

  @Metadata({ data: "json, name=DeviceTypeIos" })
  deviceTypeIos?: AccessPropertyValueEnum;

  @Metadata({ data: "json, name=DeviceTypeLinux" })
  deviceTypeLinux?: AccessPropertyValueEnum;

  @Metadata({ data: "json, name=DeviceTypeOsx" })
  deviceTypeOsx?: AccessPropertyValueEnum;

  @Metadata({ data: "json, name=DeviceTypeWeb" })
  deviceTypeWeb?: AccessPropertyValueEnum;

  @Metadata({ data: "json, name=DeviceTypeWindows" })
  deviceTypeWindows?: AccessPropertyValueEnum;

  @Metadata({ data: "json, name=DeviceTypeZeroClient" })
  deviceTypeZeroClient?: AccessPropertyValueEnum;
}
