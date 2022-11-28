import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MonthlySchedule
/** 
 * Specifies a monthly recurrence pattern for running a classification job.
**/
export class MonthlySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dayOfMonth" })
  dayOfMonth?: number;
}
