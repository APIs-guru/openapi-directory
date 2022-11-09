import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TargetingValueDayPartTargetingDayPart } from "./targetingvaluedayparttargetingdaypart";


export class TargetingValueDayPartTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=dayParts", elemType: shared.TargetingValueDayPartTargetingDayPart })
  dayParts?: TargetingValueDayPartTargetingDayPart[];

  @Metadata({ data: "json, name=timeZoneType" })
  timeZoneType?: string;
}
