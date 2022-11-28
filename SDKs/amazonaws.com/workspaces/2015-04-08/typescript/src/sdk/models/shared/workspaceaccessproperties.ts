import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessPropertyValueEnum } from "./accesspropertyvalueenum";



// WorkspaceAccessProperties
/** 
 * The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>.
**/
export class WorkspaceAccessProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceTypeAndroid" })
  deviceTypeAndroid?: AccessPropertyValueEnum;

  @SpeakeasyMetadata({ data: "json, name=DeviceTypeChromeOs" })
  deviceTypeChromeOs?: AccessPropertyValueEnum;

  @SpeakeasyMetadata({ data: "json, name=DeviceTypeIos" })
  deviceTypeIos?: AccessPropertyValueEnum;

  @SpeakeasyMetadata({ data: "json, name=DeviceTypeLinux" })
  deviceTypeLinux?: AccessPropertyValueEnum;

  @SpeakeasyMetadata({ data: "json, name=DeviceTypeOsx" })
  deviceTypeOsx?: AccessPropertyValueEnum;

  @SpeakeasyMetadata({ data: "json, name=DeviceTypeWeb" })
  deviceTypeWeb?: AccessPropertyValueEnum;

  @SpeakeasyMetadata({ data: "json, name=DeviceTypeWindows" })
  deviceTypeWindows?: AccessPropertyValueEnum;

  @SpeakeasyMetadata({ data: "json, name=DeviceTypeZeroClient" })
  deviceTypeZeroClient?: AccessPropertyValueEnum;
}
