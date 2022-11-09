import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MobileDeviceAccessRuleEffectEnum } from "./mobiledeviceaccessruleeffectenum";
export declare class CreateMobileDeviceAccessRuleRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    deviceModels?: string[];
    deviceOperatingSystems?: string[];
    deviceTypes?: string[];
    deviceUserAgents?: string[];
    effect: MobileDeviceAccessRuleEffectEnum;
    name: string;
    notDeviceModels?: string[];
    notDeviceOperatingSystems?: string[];
    notDeviceTypes?: string[];
    notDeviceUserAgents?: string[];
    organizationId: string;
}
