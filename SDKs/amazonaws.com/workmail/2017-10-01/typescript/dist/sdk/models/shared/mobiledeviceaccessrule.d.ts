import { SpeakeasyBase } from "../../../internal/utils";
import { MobileDeviceAccessRuleEffectEnum } from "./mobiledeviceaccessruleeffectenum";
/**
 * A rule that controls access to mobile devices for an Amazon WorkMail group.
**/
export declare class MobileDeviceAccessRule extends SpeakeasyBase {
    dateCreated?: Date;
    dateModified?: Date;
    description?: string;
    deviceModels?: string[];
    deviceOperatingSystems?: string[];
    deviceTypes?: string[];
    deviceUserAgents?: string[];
    effect?: MobileDeviceAccessRuleEffectEnum;
    mobileDeviceAccessRuleId?: string;
    name?: string;
    notDeviceModels?: string[];
    notDeviceOperatingSystems?: string[];
    notDeviceTypes?: string[];
    notDeviceUserAgents?: string[];
}
