import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetingValueDayPartTargetingDayPart } from "./targetingvaluedayparttargetingdaypart";



export class TargetingValueDayPartTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dayParts", elemType: TargetingValueDayPartTargetingDayPart })
  dayParts?: TargetingValueDayPartTargetingDayPart[];

  @SpeakeasyMetadata({ data: "json, name=timeZoneType" })
  timeZoneType?: string;
}
