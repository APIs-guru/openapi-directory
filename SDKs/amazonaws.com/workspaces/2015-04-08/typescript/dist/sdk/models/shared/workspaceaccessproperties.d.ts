import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPropertyValueEnum } from "./accesspropertyvalueenum";
/**
 * The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>.
**/
export declare class WorkspaceAccessProperties extends SpeakeasyBase {
    deviceTypeAndroid?: AccessPropertyValueEnum;
    deviceTypeChromeOs?: AccessPropertyValueEnum;
    deviceTypeIos?: AccessPropertyValueEnum;
    deviceTypeLinux?: AccessPropertyValueEnum;
    deviceTypeOsx?: AccessPropertyValueEnum;
    deviceTypeWeb?: AccessPropertyValueEnum;
    deviceTypeWindows?: AccessPropertyValueEnum;
    deviceTypeZeroClient?: AccessPropertyValueEnum;
}
