import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetingValueCreativeSize } from "./targetingvaluecreativesize";
import { TargetingValueDayPartTargeting } from "./targetingvaluedayparttargeting";
import { TargetingValueDemogAgeCriteria } from "./targetingvaluedemogagecriteria";
import { TargetingValueDemogGenderCriteria } from "./targetingvaluedemoggendercriteria";
import { TargetingValueRequestPlatformTargeting } from "./targetingvaluerequestplatformtargeting";



export class TargetingValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creativeSizeValue" })
  creativeSizeValue?: TargetingValueCreativeSize;

  @SpeakeasyMetadata({ data: "json, name=dayPartTargetingValue" })
  dayPartTargetingValue?: TargetingValueDayPartTargeting;

  @SpeakeasyMetadata({ data: "json, name=demogAgeCriteriaValue" })
  demogAgeCriteriaValue?: TargetingValueDemogAgeCriteria;

  @SpeakeasyMetadata({ data: "json, name=demogGenderCriteriaValue" })
  demogGenderCriteriaValue?: TargetingValueDemogGenderCriteria;

  @SpeakeasyMetadata({ data: "json, name=longValue" })
  longValue?: string;

  @SpeakeasyMetadata({ data: "json, name=requestPlatformTargetingValue" })
  requestPlatformTargetingValue?: TargetingValueRequestPlatformTargeting;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
