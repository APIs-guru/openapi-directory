import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CanaryScheduleOutput
/** 
 * How long, in seconds, for the canary to continue making regular runs according to the schedule in the <code>Expression</code> value.
**/
export class CanaryScheduleOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DurationInSeconds" })
  durationInSeconds?: number;

  @Metadata({ data: "json, name=Expression" })
  expression?: string;
}
