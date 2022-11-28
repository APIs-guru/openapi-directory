import { SpeakeasyBase } from "../../../internal/utils";
import { MobileDeviceAccessRuleEffectEnum } from "./mobiledeviceaccessruleeffectenum";
import { MobileDeviceAccessMatchedRule } from "./mobiledeviceaccessmatchedrule";
export declare class GetMobileDeviceAccessEffectResponse extends SpeakeasyBase {
    effect?: MobileDeviceAccessRuleEffectEnum;
    matchedRules?: MobileDeviceAccessMatchedRule[];
}
