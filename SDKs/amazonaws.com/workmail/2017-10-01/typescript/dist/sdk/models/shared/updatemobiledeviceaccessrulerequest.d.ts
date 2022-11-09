import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MobileDeviceAccessRuleEffectEnum } from "./mobiledeviceaccessruleeffectenum";
export declare class UpdateMobileDeviceAccessRuleRequest extends SpeakeasyBase {
    description?: string;
    deviceModels?: string[];
    deviceOperatingSystems?: string[];
    deviceTypes?: string[];
    deviceUserAgents?: string[];
    effect: MobileDeviceAccessRuleEffectEnum;
    mobileDeviceAccessRuleId: string;
    name: string;
    notDeviceModels?: string[];
    notDeviceOperatingSystems?: string[];
    notDeviceTypes?: string[];
    notDeviceUserAgents?: string[];
    organizationId: string;
}
