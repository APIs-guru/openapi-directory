import { SpeakeasyBase } from "../../../internal/utils";
import { TargetingValueCreativeSize } from "./targetingvaluecreativesize";
import { TargetingValueDayPartTargeting } from "./targetingvaluedayparttargeting";
import { TargetingValueDemogAgeCriteria } from "./targetingvaluedemogagecriteria";
import { TargetingValueDemogGenderCriteria } from "./targetingvaluedemoggendercriteria";
import { TargetingValueRequestPlatformTargeting } from "./targetingvaluerequestplatformtargeting";
export declare class TargetingValue extends SpeakeasyBase {
    creativeSizeValue?: TargetingValueCreativeSize;
    dayPartTargetingValue?: TargetingValueDayPartTargeting;
    demogAgeCriteriaValue?: TargetingValueDemogAgeCriteria;
    demogGenderCriteriaValue?: TargetingValueDemogGenderCriteria;
    longValue?: string;
    requestPlatformTargetingValue?: TargetingValueRequestPlatformTargeting;
    stringValue?: string;
}
