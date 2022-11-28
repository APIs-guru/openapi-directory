import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CanaryScheduleOutput
/** 
 * How long, in seconds, for the canary to continue making regular runs according to the schedule in the <code>Expression</code> value.
**/
export class CanaryScheduleOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DurationInSeconds" })
  durationInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=Expression" })
  expression?: string;
}
