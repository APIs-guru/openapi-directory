import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetingValueCreativeSize } from "./targetingvaluecreativesize";
import { TargetingValueDayPartTargeting } from "./targetingvaluedayparttargeting";
import { TargetingValueDemogAgeCriteria } from "./targetingvaluedemogagecriteria";
import { TargetingValueDemogGenderCriteria } from "./targetingvaluedemoggendercriteria";
import { TargetingValueRequestPlatformTargeting } from "./targetingvaluerequestplatformtargeting";


export class TargetingValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=creativeSizeValue" })
  creativeSizeValue?: TargetingValueCreativeSize;

  @Metadata({ data: "json, name=dayPartTargetingValue" })
  dayPartTargetingValue?: TargetingValueDayPartTargeting;

  @Metadata({ data: "json, name=demogAgeCriteriaValue" })
  demogAgeCriteriaValue?: TargetingValueDemogAgeCriteria;

  @Metadata({ data: "json, name=demogGenderCriteriaValue" })
  demogGenderCriteriaValue?: TargetingValueDemogGenderCriteria;

  @Metadata({ data: "json, name=longValue" })
  longValue?: string;

  @Metadata({ data: "json, name=requestPlatformTargetingValue" })
  requestPlatformTargetingValue?: TargetingValueRequestPlatformTargeting;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
